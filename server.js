const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const net = require("net");
const tls = require("tls");

const root = __dirname;
const port = Number(process.env.PORT || 5177);
const contactTo = "rushilardeshna@gmail.com";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

http.createServer((req, res) => {
  if (req.method === "POST" && req.url.split("?")[0] === "/api/contact") {
    handleContact(req, res);
    return;
  }
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const safePath = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  let filePath = path.join(root, safePath === "/" ? "index.html" : safePath);
  if (!filePath.startsWith(root)) filePath = path.join(root, "index.html");
  fs.readFile(filePath, (error, data) => {
    if (error) {
      fs.readFile(path.join(root, "index.html"), (fallbackError, fallback) => {
        res.writeHead(fallbackError ? 404 : 200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(fallbackError ? "Not found" : fallback);
      });
      return;
    }
    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(port, process.env.HOST || "127.0.0.1", () => {
  console.log(`Developer Tools running at http://127.0.0.1:${port}`);
});

function handleContact(req, res) {
  readJson(req).then(async (body) => {
    const name = clean(body.name, 120);
    const email = clean(body.email, 160);
    const message = clean(body.message, 5000);
    if (!name || !email || !message) return json(res, 400, { error: "Name, email and message are required." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(res, 400, { error: "Please enter a valid email." });
    await sendMail({
      fromName: name,
      replyTo: email,
      to: contactTo,
      subject: "New message from Developer Tools",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });
    json(res, 200, { ok: true });
  }).catch((error) => json(res, 500, { error: error.message || "Unable to send message." }));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 10000) {
        reject(new Error("Message is too large."));
        req.destroy();
      }
    });
    req.on("end", () => {
      try { resolve(JSON.parse(data || "{}")); } catch { reject(new Error("Invalid request.")); }
    });
    req.on("error", reject);
  });
}

function json(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

function clean(value, max) {
  return String(value || "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

async function sendMail({ fromName, replyTo, to, subject, text }) {
  const host = process.env.SMTP_HOST;
  const portNumber = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  if (!host || !user || !pass || !from) {
    throw new Error("Email backend is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and SMTP_FROM.");
  }
  let client = await smtpConnect(host, portNumber);
  try {
    await smtpRead(client);
    await smtpCommand(client, `EHLO developer-tools.local`);
    if (portNumber !== 465) {
      await smtpCommand(client, "STARTTLS");
      client = await smtpUpgrade(client, host);
      await smtpCommand(client, `EHLO developer-tools.local`);
    }
    await smtpCommand(client, "AUTH LOGIN");
    await smtpCommand(client, Buffer.from(user).toString("base64"));
    await smtpCommand(client, Buffer.from(pass).toString("base64"));
    await smtpCommand(client, `MAIL FROM:<${from}>`);
    await smtpCommand(client, `RCPT TO:<${to}>`);
    await smtpCommand(client, "DATA");
    const messageId = `${Date.now()}.${crypto.randomBytes(8).toString("hex")}@developer-tools.local`;
    await smtpCommand(client, [
      `From: ${mimeWord(fromName)} <${from}>`,
      `To: ${to}`,
      `Reply-To: ${replyTo}`,
      `Subject: ${mimeWord(subject)}`,
      `Message-ID: <${messageId}>`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      text.replace(/^\./gm, ".."),
      "."
    ].join("\r\n"));
    await smtpCommand(client, "QUIT");
  } finally {
    client.end();
  }
}

function smtpConnect(host, portNumber) {
  return new Promise((resolve, reject) => {
    const client = portNumber === 465 ? tls.connect(portNumber, host, { servername: host }, () => resolve(client)) : net.connect(portNumber, host, () => resolve(client));
    client.setEncoding("utf8");
    client.setTimeout(15000);
    client.on("timeout", () => reject(new Error("SMTP connection timed out.")));
    client.on("error", reject);
  });
}

function smtpUpgrade(client, host) {
  return new Promise((resolve, reject) => {
    const secure = tls.connect({ socket: client, servername: host }, () => {
      secure.setEncoding("utf8");
      resolve(secure);
    });
    secure.on("error", reject);
  });
}

function smtpRead(client) {
  return new Promise((resolve, reject) => {
    let data = "";
    const onData = (chunk) => {
      data += chunk;
      if (/\r?\n\d{3} /.test(data)) {
        client.off("data", onData);
        const code = Number(data.slice(0, 3));
        code >= 400 ? reject(new Error(data.trim())) : resolve(data);
      }
    };
    client.on("data", onData);
  });
}

async function smtpCommand(client, command) {
  client.write(command + "\r\n");
  return smtpRead(client);
}

function mimeWord(value) {
  return `=?UTF-8?B?${Buffer.from(value).toString("base64")}?=`;
}
