const categories = [
  ["encoders-decoders", "Encoders / Decoders", "Encode, decode and inspect common data formats.", "ED"],
  ["formatters", "Formatters", "Clean up JSON, HTML, CSS, SQL, XML and Markdown.", "FM"],
  ["generators", "Generators", "Create IDs, hashes, passwords, slugs, QR-style codes and text.", "GN"],
  ["converters", "Converters", "Convert timestamps, units, colors, images, CSV and numbers.", "CV"],
  ["testers-validators", "Testers / Validators", "Validate JSON, test regex, inspect cron and schemas.", "TV"],
  ["text-tools", "Text Tools", "Count, compare, replace, speak and transform text.", "TX"],
  ["design-tools", "Design Tools", "Generate palettes, gradients, shadows, ratios and type pairs.", "DS"],
  ["utilities", "Utility Tools", "Daily calculators, timers, notes and device helpers.", "UT"],
  ["fun-misc", "Fun / Misc", "Dice, coins, Morse, color simulation and random numbers.", "FN"]
];

const toolDefs = [
  ["encoders-decoders", "base64-text", "Base64 Text", "Encode and decode text with Base64.", "base64"],
  ["encoders-decoders", "url-encode-decode", "URL Encode / Decode", "Safely encode or decode URL text.", "url"],
  ["encoders-decoders", "html-entity", "HTML Entity", "Escape and unescape HTML entities.", "htmlEntity"],
  ["encoders-decoders", "jwt-decoder", "JWT Decoder", "Decode JWT header and payload locally.", "jwt"],
  ["encoders-decoders", "image-to-base64", "Image to Base64", "Convert image files to data URLs.", "imageToBase64"],
  ["encoders-decoders", "base64-to-image", "Base64 to Image", "Preview a Base64 image string.", "base64ToImage"],
  ["formatters", "json-formatter", "JSON Formatter", "Format, minify and validate JSON.", "json"],
  ["formatters", "html-formatter", "HTML Formatter", "Indent simple HTML markup.", "pretty"],
  ["formatters", "css-formatter", "CSS Formatter", "Indent CSS blocks and rules.", "pretty"],
  ["formatters", "sql-formatter", "SQL Formatter", "Format common SQL keywords.", "sql"],
  ["formatters", "xml-formatter", "XML Formatter", "Indent XML documents.", "xml"],
  ["formatters", "markdown-preview", "Markdown Preview", "Preview Markdown as HTML.", "markdown"],
  ["generators", "password-generator", "Password Generator", "Generate strong passwords.", "password"],
  ["generators", "uuid-generator", "UUID Generator", "Generate random UUID v4 values.", "uuid"],
  ["generators", "hash-generator", "Hash Generator", "Create SHA-1, SHA-256 and SHA-512 hashes.", "hash"],
  ["generators", "slug-generator", "Slug Generator", "Turn text into URL-friendly slugs.", "slug"],
  ["generators", "random-text", "Random Text", "Generate placeholder words and paragraphs.", "randomText"],
  ["generators", "qr-code-generator", "QR Code Generator", "Create a downloadable QR-style matrix.", "qr"],
  ["converters", "timestamp-converter", "Timestamp Converter", "Convert Unix timestamps and dates.", "timestamp"],
  ["converters", "unit-converter", "Unit Converter", "Convert length, weight and temperature.", "unit"],
  ["converters", "number-base", "Number Base Converter", "Convert decimal, binary, hex and octal.", "numberBase"],
  ["converters", "csv-json", "CSV to JSON", "Convert CSV rows to JSON objects.", "csvJson"],
  ["converters", "color-picker", "Color Picker", "Inspect HEX, RGB and HSL colors.", "color"],
  ["converters", "image-compressor", "Image Compressor", "Resize and compress images in canvas.", "imageTool"],
  ["converters", "image-converter", "Image Converter", "Convert images to PNG, JPEG or WebP.", "imageTool"],
  ["testers-validators", "json-validator", "JSON Validator", "Validate JSON and see parsed output.", "json"],
  ["testers-validators", "regex-tester", "Regex Tester", "Test regular expressions against text.", "regex"],
  ["testers-validators", "cron-parser", "Cron Parser", "Explain simple five-field cron expressions.", "cron"],
  ["testers-validators", "json-schema", "JSON Schema Validator", "Validate required fields in a basic schema.", "schema"],
  ["text-tools", "word-counter", "Word Counter", "Count words, characters, lines and sentences.", "wordCounter"],
  ["text-tools", "case-converter", "Case Converter", "Convert text between common cases.", "case"],
  ["text-tools", "find-replace", "Find and Replace", "Replace text with plain or regex matching.", "findReplace"],
  ["text-tools", "diff-checker", "Diff Checker", "Compare two text blocks line by line.", "diff"],
  ["text-tools", "text-to-speech", "Text to Speech", "Read text aloud with the browser voice API.", "tts"],
  ["text-tools", "speech-to-text", "Speech to Text", "Use browser speech recognition when available.", "stt"],
  ["text-tools", "string-utils", "String Utilities", "Trim, reverse, sort and deduplicate lines.", "stringUtils"],
  ["design-tools", "color-palette", "Color Palette Generator", "Generate a palette from a base color.", "palette"],
  ["design-tools", "gradient-generator", "Gradient Generator", "Build CSS gradients visually.", "gradient"],
  ["design-tools", "box-shadow", "Box Shadow Generator", "Tune and copy CSS box shadows.", "shadow"],
  ["design-tools", "aspect-ratio", "Aspect Ratio Calculator", "Calculate width, height and ratios.", "ratio"],
  ["design-tools", "font-pair", "Font Pair Finder", "Preview useful system font pairings.", "fontPair"],
  ["design-tools", "image-cropper", "Image Cropper", "Crop a centered square from an image.", "imageTool"],
  ["utilities", "calculator", "Calculator", "Evaluate simple math expressions.", "calculator"],
  ["utilities", "percentage-calc", "Percentage Calculator", "Calculate percent values and changes.", "percentage"],
  ["utilities", "bmi-calculator", "BMI Calculator", "Calculate body mass index.", "bmi"],
  ["utilities", "age-calculator", "Age Calculator", "Calculate exact age from date of birth.", "age"],
  ["utilities", "tip-calculator", "Tip Calculator", "Split bills and tips quickly.", "tip"],
  ["utilities", "pomodoro", "Pomodoro Timer", "Focus timer with work and break modes.", "pomodoro"],
  ["utilities", "stopwatch-timer", "Stopwatch / Timer", "Track elapsed time and countdowns.", "stopwatch"],
  ["utilities", "notepad", "Notepad", "Autosaving local browser notes.", "notepad"],
  ["utilities", "screen-info", "Screen Info", "View browser, viewport and screen details.", "screen"],
  ["fun-misc", "coin-flip", "Coin Flip", "Flip a virtual coin.", "coin"],
  ["fun-misc", "dice-roller", "Dice Roller", "Roll dice with custom sides.", "dice"],
  ["fun-misc", "random-number", "Random Number Generator", "Generate random numbers in a range.", "randomNumber"],
  ["fun-misc", "morse-code", "Morse Code Translator", "Translate text to and from Morse code.", "morse"],
  ["fun-misc", "color-blindness", "Color Blindness Simulator", "Preview approximate color-vision filters.", "blindness"]
];

const tools = toolDefs.map(([category, slug, name, description, type]) => ({ category, slug, name, description, type, path: `#/tools/${category}/${slug}` }));
const categoryMap = Object.fromEntries(categories.map(([slug, name, description, icon]) => [slug, { slug, name, description, icon }]));
const app = document.querySelector("#app");

function init() {
  document.querySelector("#megaMenu").innerHTML = categories.map(catLink).join("");
  document.querySelector("#mobileMenu").innerHTML = categories.map(catLink).join("") + `<a href="#/blog">Blog</a><a href="#/about">About</a>`;
  document.querySelector("#themeToggle").addEventListener("click", toggleTheme);
  document.querySelector("#menuToggle").addEventListener("click", () => {
    const menu = document.querySelector("#mobileMenu");
    menu.hidden = !menu.hidden;
  });
  setupSearch();
  document.querySelector("#contactForm").addEventListener("submit", sendContactForm);
  window.addEventListener("hashchange", render);
  render();
}

async function sendContactForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector("button");
  const payload = Object.fromEntries(new FormData(form).entries());
  button.disabled = true;
  button.textContent = "Sending...";
  
  try {
    const response = await fetch("https://formsubmit.co/ajax/rushilardeshna@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        message: payload.message,
        _captcha: false
      })
    });
    
    if (response.ok) {
      toast("Message sent successfully!");
      form.reset();
    } else {
      toast("Failed to send message. Please try again.");
    }
  } catch (error) {
    toast("Failed to send message. Please try again.");
  }
  
  button.disabled = false;
  button.textContent = "Send Message";
}

function catLink([slug, name, , icon]) {
  return `<a href="#/tools/${slug}"><span class="cat-icon">${icon}</span><span>${name}</span></a>`;
}

function render() {
  const route = location.hash.replace(/^#/, "") || "/";
  window.scrollTo({ top: 0, behavior: "instant" });
  if (route === "/" || route === "") return renderHome();
  if (route === "/about") return renderAbout();
  if (route === "/blog") return renderBlog();
  if (route === "/privacy" || route === "/terms" || route === "/contact") return renderPage(route.slice(1));
  const parts = route.split("/").filter(Boolean);
  if (parts[0] === "tools" && parts.length === 2) return renderCategory(parts[1]);
  if (parts[0] === "tools" && parts.length === 3) return renderTool(parts[1], parts[2]);
  renderNotFound();
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <span class="badge">${tools.length} tools and growing</span>
      <h1>Free Online <span class="glow-text">Developer Tools</span></h1>
      <p class="lead">A fast, private toolbox for developers, designers and creators. Format data, generate assets, test snippets and convert files without signing in.</p>
      <div class="hero-actions">
        <a class="primary" href="#/tools/formatters/json-formatter">Try JSON Formatter</a>
        <button class="secondary" onclick="openSearchDialog()">Search Tools</button>
      </div>
      <div class="stats">
        <div class="stat"><strong>${tools.length}</strong><span>Browser tools</span></div>
        <div class="stat"><strong>0</strong><span>Required accounts</span></div>
        <div class="stat"><strong>100%</strong><span>Client-side</span></div>
        <div class="stat"><strong>9</strong><span>Tool categories</span></div>
      </div>
    </section>
    <section class="page">
      <div class="section-head"><div><h2>Categories</h2><p>Browse by workflow.</p></div></div>
      <div class="grid">${categories.map(([slug, name, description, icon]) => card(`#/tools/${slug}`, icon, name, description)).join("")}</div>
      <div class="section-head"><div><h2>Popular Tools</h2><p>Fast entry points for common tasks.</p></div></div>
      <div class="grid tool-grid">${tools.slice(0, 24).map(toolCard).join("")}</div>
    </section>`;
}

function renderCategory(slug) {
  const category = categoryMap[slug];
  if (!category) return renderNotFound();
  const list = tools.filter((tool) => tool.category === slug);
  app.innerHTML = `<section class="page">
    <div class="tool-header"><span class="tool-icon">${category.icon}</span><div><h1>${category.name}</h1><p>${category.description}</p></div></div>
    <div class="grid tool-grid">${list.map(toolCard).join("")}</div>
  </section>`;
}

function renderTool(categorySlug, toolSlug) {
  const tool = tools.find((item) => item.category === categorySlug && item.slug === toolSlug);
  if (!tool) return renderNotFound();
  app.innerHTML = `<section class="page">
    <div class="tool-header"><span class="tool-icon">${categoryMap[tool.category].icon}</span><div><h1>${tool.name}</h1><p>${tool.description}</p></div></div>
    <div class="tool-panel" id="toolPanel"></div>
  </section>`;
  renderToolPanel(tool);
}

function renderAbout() {
  app.innerHTML = `<section class="page">
    <div class="tool-header"><span class="tool-icon">DT</span><div><h1>About <span class="glow-text">Developer Tools</span></h1><p>Fast, private browser tools for daily development work.</p></div></div>
    <div class="info-box" style="padding:28px;margin-bottom:22px"><h2>Our Mission</h2><p class="lead" style="margin:8px 0 0">Useful tools should be quick, private and easy to reach. This project keeps common developer workflows in one clean place, with calculations and conversions handled in the browser.</p></div>
    <div class="grid">${[
      ["Fast", "Tools load instantly and respond as you type."],
      ["Private", "Data stays in your browser wherever possible."],
      ["Free", "No sign-up, subscription or gated basics."],
      ["Developer-first", "Built for everyday formatting, testing and conversion work."]
    ].map(([title, body], index) => card("#/about", ["FA","PR","FR","DV"][index], title, body)).join("")}</div>
  </section>`;
}

function renderBlog() {
  const posts = [
    ["How to validate JSON faster", "A practical checklist for spotting broken JSON before it reaches production."],
    ["Choosing safer passwords", "Length, randomness and unique storage matter more than clever substitutions."],
    ["Useful browser-only tools", "Why client-side utilities are often enough for quick developer workflows."]
  ];
  app.innerHTML = `<section class="page"><h1>Blog</h1><p class="lead">Short notes for better everyday development workflows.</p><div class="grid">${posts.map(([t,d]) => card("#/blog", "BL", t, d)).join("")}</div></section>`;
}

function renderPage(title) {
  const names = { privacy: "Privacy", terms: "Terms", contact: "Contact" };
  app.innerHTML = `<section class="page"><h1>${names[title] || title}</h1><div class="info-box" style="padding:28px"><p class="lead">This static project is ready for your own final policy/contact copy. Tool data is processed in the browser unless you later connect a backend service.</p></div></section>`;
}

function renderNotFound() {
  app.innerHTML = `<section class="page"><h1>404</h1><p class="lead">This page is not available.</p><p><a class="primary" href="#/">Back Home</a></p></section>`;
}

function card(href, icon, title, body) {
  return `<a class="card" href="${href}"><span class="tool-icon">${icon}</span><span><h3>${title}</h3><p>${body}</p></span></a>`;
}

function toolCard(tool) {
  return card(tool.path, categoryMap[tool.category].icon, tool.name, tool.description);
}

function renderToolPanel(tool) {
  const panel = document.querySelector("#toolPanel");
  const simple = (placeholder = "Paste input here") => {
    panel.innerHTML = `<div class="tool-layout"><div><div class="field"><label>Input</label><textarea id="input" placeholder="${placeholder}"></textarea></div><div class="tool-actions" id="actions"></div></div><div><div class="field"><label>Output</label><div class="output" id="output"></div></div></div></div>`;
  };

  if (["base64","url","htmlEntity","jwt","json","pretty","sql","xml","markdown","slug","wordCounter","case","stringUtils","morse"].includes(tool.type)) {
    const sample = sampleFor(tool.type);
    simple(sample);
    if (!sample.startsWith("Paste")) document.querySelector("#input").value = sample;
    const actions = document.querySelector("#actions");
    actions.innerHTML = actionButtons(tool.type);
    document.querySelector("#input").addEventListener("input", () => autoRun(tool.type));
    autoRun(tool.type);
    return;
  }

  const custom = {
    imageToBase64, base64ToImage, password, uuid, hash, randomText, qr, timestamp, unit, numberBase,
    csvJson, color, imageTool, regex, cron, schema, findReplace, diff, tts, stt, palette, gradient,
    shadow, ratio, fontPair, calculator, percentage, bmi, age, tip, pomodoro, stopwatch, notepad,
    screen, coin, dice, randomNumber, blindness
  }[tool.type];
  custom ? custom(panel, tool) : simple();
}

function actionButtons(type) {
  const map = {
    base64: ["Encode", "Decode", "Copy"],
    url: ["Encode", "Decode", "Copy"],
    htmlEntity: ["Encode", "Decode", "Copy"],
    jwt: ["Decode", "Copy"],
    json: ["Format", "Minify", "Copy"],
    pretty: ["Format", "Copy"],
    sql: ["Format", "Copy"],
    xml: ["Format", "Copy"],
    markdown: ["Preview", "Copy HTML"],
    slug: ["Generate", "Copy"],
    wordCounter: ["Count", "Copy"],
    case: ["Title", "Camel", "Snake", "Kebab", "Upper", "Lower"],
    stringUtils: ["Trim", "Reverse", "Sort Lines", "Unique Lines"],
    morse: ["To Morse", "From Morse", "Copy"]
  };
  return map[type].map((label) => `<button class="secondary" onclick="runAction('${type}','${label}')">${label}</button>`).join("");
}

function sampleFor(type) {
  return {
    json: '{"name":"Developer Tools","private":true,"count":56}',
    pretty: '<main><h1>Hello</h1><p>World</p></main>',
    sql: 'select id, name from users where active = true order by name',
    xml: '<root><tool name="formatter"><status>ready</status></tool></root>',
    markdown: '# Heading\n\n**Bold text** and a list:\n- One\n- Two',
    jwt: 'Paste a JWT token here',
    wordCounter: 'Paste or type text to count words and characters.',
    case: 'convert this sample text',
    morse: 'SOS developer tools'
  }[type] || "Paste input here";
}

function autoRun(type) {
  const defaults = { json: "Format", pretty: "Format", sql: "Format", xml: "Format", markdown: "Preview", jwt: "Decode", slug: "Generate", wordCounter: "Count", case: "Title", stringUtils: "Trim", morse: "To Morse" };
  runAction(type, defaults[type] || "Encode");
}

function runAction(type, action) {
  const input = document.querySelector("#input")?.value || "";
  const out = document.querySelector("#output");
  try {
    let result = "";
    if (type === "base64") result = action === "Decode" ? decodeURIComponent(escape(atob(input))) : btoa(unescape(encodeURIComponent(input)));
    if (type === "url") result = action === "Decode" ? decodeURIComponent(input) : encodeURIComponent(input);
    if (type === "htmlEntity") result = action === "Decode" ? decodeEntities(input) : escapeHtml(input);
    if (type === "jwt") result = decodeJwt(input);
    if (type === "json") result = action === "Minify" ? JSON.stringify(JSON.parse(input)) : JSON.stringify(JSON.parse(input), null, 2);
    if (type === "pretty") result = simplePretty(input);
    if (type === "sql") result = input.replace(/\b(select|from|where|and|or|order by|group by|limit|insert|update|delete|values|set)\b/gi, "\n$1").trim();
    if (type === "xml") result = simplePretty(input.replace(/></g, ">\n<"));
    if (type === "markdown") result = markdownToHtml(input);
    if (type === "slug") result = slugify(input);
    if (type === "wordCounter") result = wordStats(input);
    if (type === "case") result = convertCase(input, action);
    if (type === "stringUtils") result = stringUtil(input, action);
    if (type === "morse") result = action === "From Morse" ? fromMorse(input) : toMorse(input);
    if (action.includes("Copy")) return copy(out.innerText);
    out.innerHTML = type === "markdown" ? `<div class="preview-box">${result}</div>` : escapeHtml(result);
  } catch (error) {
    out.textContent = "Error: " + error.message;
  }
}

function imageToBase64(panel) {
  panel.innerHTML = fileToolHtml("Choose image", "Data URL");
  document.querySelector("#file").addEventListener("change", (event) => readImage(event, (data) => document.querySelector("#output").textContent = data));
}

function base64ToImage(panel) {
  panel.innerHTML = `<div class="tool-layout"><textarea id="input" placeholder="Paste Base64 image data URL"></textarea><div class="output" id="output"></div></div>`;
  document.querySelector("#input").addEventListener("input", () => {
    const value = document.querySelector("#input").value.trim();
    document.querySelector("#output").innerHTML = value ? `<img alt="preview" style="max-width:100%" src="${value.startsWith("data:") ? value : "data:image/png;base64," + value}">` : "";
  });
}

function password(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="len" type="number" min="6" max="128" value="20"><select id="mode"><option>Letters Numbers Symbols</option><option>Letters Numbers</option><option>PIN</option></select></div><div class="tool-actions"><button class="primary" id="gen">Generate</button><button class="secondary" onclick="copy(document.querySelector('#output').innerText)">Copy</button></div><div class="output" id="output"></div>`;
  const gen = () => {
    const sets = { "Letters Numbers Symbols": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+", "Letters Numbers": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", PIN: "0123456789" };
    const chars = sets[document.querySelector("#mode").value];
    const len = Number(document.querySelector("#len").value);
    document.querySelector("#output").textContent = Array.from(crypto.getRandomValues(new Uint32Array(len)), (n) => chars[n % chars.length]).join("");
  };
  document.querySelector("#gen").onclick = gen; gen();
}

function uuid(panel) {
  panel.innerHTML = `<button class="primary" id="gen">Generate UUID</button><button class="secondary" onclick="copy(document.querySelector('#output').innerText)">Copy</button><div class="output" id="output"></div>`;
  document.querySelector("#gen").onclick = () => document.querySelector("#output").textContent = crypto.randomUUID();
  document.querySelector("#gen").click();
}

function hash(panel) {
  panel.innerHTML = `<textarea id="input" placeholder="Text to hash"></textarea><div class="tool-actions"><button class="primary" id="go">Hash</button></div><div class="output" id="output"></div>`;
  document.querySelector("#go").onclick = async () => {
    const text = new TextEncoder().encode(document.querySelector("#input").value);
    const rows = await Promise.all(["SHA-1","SHA-256","SHA-512"].map(async (alg) => `${alg}: ${hex(await crypto.subtle.digest(alg, text))}`));
    document.querySelector("#output").textContent = rows.join("\n");
  };
}

function randomText(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="count" type="number" value="60" min="1"><select id="kind"><option>Words</option><option>Paragraph</option></select></div><button class="primary" id="go">Generate</button><div class="output" id="output"></div>`;
  const words = "alpha build cache deploy editor format generate hash inspect json kernel layout module network object parse query render schema token update vector widget".split(" ");
  document.querySelector("#go").onclick = () => {
    const count = Number(document.querySelector("#count").value);
    const text = Array.from({ length: count }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
    document.querySelector("#output").textContent = document.querySelector("#kind").value === "Paragraph" ? text + "." : text;
  };
  document.querySelector("#go").click();
}

function qr(panel) {
  panel.innerHTML = `<input id="qrtext" placeholder="Text or URL"><button class="primary" id="go">Generate</button><div class="preview-box"><canvas id="qr" width="280" height="280"></canvas></div>`;
  document.querySelector("#go").onclick = () => drawMatrix(document.querySelector("#qrtext").value || "Developer Tools");
  document.querySelector("#go").click();
}

function timestamp(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="stamp" placeholder="Unix timestamp"><input id="date" type="datetime-local"></div><div class="tool-actions"><button class="primary" id="fromStamp">Timestamp to Date</button><button class="secondary" id="fromDate">Date to Timestamp</button></div><div class="output" id="output"></div>`;
  document.querySelector("#stamp").value = Math.floor(Date.now()/1000);
  document.querySelector("#fromStamp").onclick = () => document.querySelector("#output").textContent = new Date(Number(document.querySelector("#stamp").value) * 1000).toString();
  document.querySelector("#fromDate").onclick = () => document.querySelector("#output").textContent = Math.floor(new Date(document.querySelector("#date").value).getTime()/1000);
  document.querySelector("#fromStamp").click();
}

function unit(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="value" type="number" value="1"><select id="unit"><option>meters to feet</option><option>feet to meters</option><option>kg to lb</option><option>lb to kg</option><option>c to f</option><option>f to c</option></select></div><div class="output" id="output"></div>`;
  const calc = () => {
    const v = Number(document.querySelector("#value").value), u = document.querySelector("#unit").value;
    const r = { "meters to feet": v*3.28084, "feet to meters": v/3.28084, "kg to lb": v*2.20462, "lb to kg": v/2.20462, "c to f": v*9/5+32, "f to c": (v-32)*5/9 }[u];
    document.querySelector("#output").textContent = r.toFixed(4);
  };
  document.querySelectorAll("#value,#unit").forEach((el) => el.addEventListener("input", calc)); calc();
}

function numberBase(panel) {
  panel.innerHTML = `<input id="num" value="255" placeholder="Decimal number"><div class="output" id="output"></div>`;
  const calc = () => {
    const n = Number(document.querySelector("#num").value);
    document.querySelector("#output").textContent = `Decimal: ${n}\nBinary: ${n.toString(2)}\nHex: ${n.toString(16).toUpperCase()}\nOctal: ${n.toString(8)}`;
  };
  document.querySelector("#num").addEventListener("input", calc); calc();
}

function csvJson(panel) {
  panel.innerHTML = `<textarea id="input" placeholder="name,role\nAsha,Developer"></textarea><button class="primary" id="go">Convert</button><div class="output" id="output"></div>`;
  document.querySelector("#go").onclick = () => {
    const rows = document.querySelector("#input").value.trim().split(/\r?\n/).map((r) => r.split(","));
    const headers = rows.shift() || [];
    document.querySelector("#output").textContent = JSON.stringify(rows.map((row) => Object.fromEntries(headers.map((h, i) => [h.trim(), (row[i] || "").trim()]))), null, 2);
  };
}

function color(panel) {
  panel.innerHTML = `<input id="color" type="color" value="#34d399"><div class="preview-box" id="swatch"></div><div class="output" id="output"></div>`;
  const calc = () => {
    const hexColor = document.querySelector("#color").value;
    const rgb = hexColor.match(/\w\w/g).map((x) => parseInt(x, 16));
    document.querySelector("#swatch").style.background = hexColor;
    document.querySelector("#output").textContent = `${hexColor}\nrgb(${rgb.join(", ")})`;
  };
  document.querySelector("#color").addEventListener("input", calc); calc();
}

function imageTool(panel, tool) {
  panel.innerHTML = `${fileToolHtml("Choose image", "Canvas output")}<div class="mini-grid"><input id="quality" type="range" min="0.1" max="1" step="0.1" value="0.8"><select id="format"><option>image/png</option><option>image/jpeg</option><option>image/webp</option></select></div><button class="primary" id="download">Download Result</button>`;
  let data = "";
  document.querySelector("#file").addEventListener("change", (event) => readImage(event, (url) => { data = url; processImage(tool.slug); }));
  document.querySelectorAll("#quality,#format").forEach((el) => el.addEventListener("input", () => data && processImage(tool.slug)));
  document.querySelector("#download").onclick = () => {
    const link = document.createElement("a");
    link.download = "developer-tools-image";
    link.href = document.querySelector("canvas")?.toDataURL(document.querySelector("#format").value, Number(document.querySelector("#quality").value)) || "";
    link.click();
  };
  function processImage(slug) {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas"), ctx = canvas.getContext("2d");
      const size = slug === "image-cropper" ? Math.min(img.width, img.height) : Math.min(1200, img.width);
      canvas.width = slug === "image-cropper" ? size : size;
      canvas.height = slug === "image-cropper" ? size : Math.round(img.height * (size / img.width));
      const sx = slug === "image-cropper" ? (img.width - size) / 2 : 0;
      const sy = slug === "image-cropper" ? (img.height - size) / 2 : 0;
      ctx.drawImage(img, sx, sy, slug === "image-cropper" ? size : img.width, slug === "image-cropper" ? size : img.height, 0, 0, canvas.width, canvas.height);
      document.querySelector("#output").innerHTML = "";
      document.querySelector("#output").append(canvas);
    };
    img.src = data;
  }
}

function regex(panel) {
  panel.innerHTML = `<input id="pattern" placeholder="Regex pattern"><input id="flags" value="gi" placeholder="flags"><textarea id="text" placeholder="Text to test"></textarea><div class="output" id="output"></div>`;
  const calc = () => {
    try {
      const re = new RegExp(document.querySelector("#pattern").value, document.querySelector("#flags").value);
      const matches = [...document.querySelector("#text").value.matchAll(re)].map((m) => `${m.index}: ${m[0]}`);
      document.querySelector("#output").textContent = matches.join("\n") || "No matches";
    } catch (e) { document.querySelector("#output").textContent = e.message; }
  };
  document.querySelectorAll("#pattern,#flags,#text").forEach((el) => el.addEventListener("input", calc));
}

function cron(panel) {
  panel.innerHTML = `<input id="cron" value="*/5 * * * *"><div class="output" id="output"></div>`;
  const calc = () => {
    const [min, hour, day, month, week] = document.querySelector("#cron").value.trim().split(/\s+/);
    document.querySelector("#output").textContent = min ? `Minute: ${cronPart(min)}\nHour: ${cronPart(hour)}\nDay: ${cronPart(day)}\nMonth: ${cronPart(month)}\nWeekday: ${cronPart(week)}` : "";
  };
  document.querySelector("#cron").addEventListener("input", calc); calc();
}

function schema(panel) {
  panel.innerHTML = `<div class="tool-layout"><textarea id="schema" placeholder='{"required":["name"]}'></textarea><textarea id="data" placeholder='{"name":"Dev"}'></textarea></div><button class="primary" id="go">Validate</button><div class="output" id="output"></div>`;
  document.querySelector("#go").onclick = () => {
    const schema = JSON.parse(document.querySelector("#schema").value || "{}");
    const data = JSON.parse(document.querySelector("#data").value || "{}");
    const missing = (schema.required || []).filter((key) => !(key in data));
    document.querySelector("#output").textContent = missing.length ? `Missing required: ${missing.join(", ")}` : "Valid for basic required fields.";
  };
}

function findReplace(panel) {
  panel.innerHTML = `<input id="find" placeholder="Find"><input id="replace" placeholder="Replace"><textarea id="input"></textarea><div class="output" id="output"></div>`;
  const calc = () => document.querySelector("#output").textContent = document.querySelector("#input").value.split(document.querySelector("#find").value).join(document.querySelector("#replace").value);
  document.querySelectorAll("#find,#replace,#input").forEach((el) => el.addEventListener("input", calc));
}

function diff(panel) {
  panel.innerHTML = `<div class="tool-layout"><textarea id="a" placeholder="Original"></textarea><textarea id="b" placeholder="Changed"></textarea></div><button class="primary" id="go">Compare</button><div class="output" id="output"></div>`;
  document.querySelector("#go").onclick = () => {
    const a = document.querySelector("#a").value.split(/\r?\n/), b = document.querySelector("#b").value.split(/\r?\n/);
    document.querySelector("#output").textContent = b.map((line, i) => line === a[i] ? `  ${line}` : `- ${a[i] || ""}\n+ ${line}`).join("\n");
  };
}

function tts(panel) {
  panel.innerHTML = `<textarea id="text" placeholder="Text to speak"></textarea><button class="primary" id="speak">Speak</button><button class="secondary" onclick="speechSynthesis.cancel()">Stop</button>`;
  document.querySelector("#speak").onclick = () => speechSynthesis.speak(new SpeechSynthesisUtterance(document.querySelector("#text").value));
}

function stt(panel) {
  panel.innerHTML = `<button class="primary" id="start">Start Listening</button><div class="output" id="output"></div>`;
  document.querySelector("#start").onclick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return document.querySelector("#output").textContent = "Speech recognition is not supported in this browser.";
    const rec = new SpeechRecognition();
    rec.onresult = (e) => document.querySelector("#output").textContent += e.results[0][0].transcript + "\n";
    rec.start();
  };
}

function palette(panel) {
  panel.innerHTML = `<input id="base" type="color" value="#34d399"><div class="grid" id="palette"></div>`;
  const draw = () => {
    const rgb = document.querySelector("#base").value.match(/\w\w/g).map((x) => parseInt(x, 16));
    document.querySelector("#palette").innerHTML = [-40,-20,0,20,40,70].map((shift) => {
      const c = rgb.map((v) => Math.max(0, Math.min(255, v + shift)));
      const hexv = "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("");
      return `<div class="card" style="background:${hexv};color:${shift > 20 ? "#06121c" : "#fff"}"><h3>${hexv}</h3></div>`;
    }).join("");
  };
  document.querySelector("#base").addEventListener("input", draw); draw();
}

function gradient(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="a" type="color" value="#34d399"><input id="b" type="color" value="#38bdf8"></div><div class="preview-box" id="preview"></div><div class="output" id="output"></div>`;
  const draw = () => {
    const css = `linear-gradient(135deg, ${a.value}, ${b.value})`;
    preview.style.background = css;
    output.textContent = `background: ${css};`;
  };
  document.querySelectorAll("#a,#b").forEach((el) => el.addEventListener("input", draw)); draw();
}

function shadow(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="x" type="range" min="-40" max="40" value="0"><input id="y" type="range" min="-40" max="40" value="18"><input id="blur" type="range" min="0" max="80" value="40"><input id="spread" type="range" min="-20" max="40" value="0"></div><div class="preview-box"><div id="box" style="width:140px;height:90px;background:var(--surface);border-radius:10px;margin:30px auto"></div></div><div class="output" id="output"></div>`;
  const draw = () => {
    const css = `${x.value}px ${y.value}px ${blur.value}px ${spread.value}px rgba(0,0,0,.35)`;
    box.style.boxShadow = css; output.textContent = `box-shadow: ${css};`;
  };
  document.querySelectorAll("input").forEach((el) => el.addEventListener("input", draw)); draw();
}

function ratio(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="w" type="number" value="1920"><input id="h" type="number" value="1080"><input id="neww" type="number" placeholder="New width"></div><div class="output" id="output"></div>`;
  const calc = () => {
    const width = Number(w.value), height = Number(h.value), nw = Number(neww.value || width);
    output.textContent = `Ratio: ${simplify(width, height)}\nHeight for ${nw}px width: ${Math.round(nw * height / width)}px`;
  };
  document.querySelectorAll("input").forEach((el) => el.addEventListener("input", calc)); calc();
}

function fontPair(panel) {
  const pairs = [["Inter","Georgia"],["Segoe UI","Cascadia Code"],["Arial","Times New Roman"],["Verdana","Courier New"]];
  panel.innerHTML = `<select id="pair">${pairs.map((p) => `<option>${p.join(" + ")}</option>`).join("")}</select><div class="preview-box" id="preview"></div>`;
  const draw = () => {
    const [head, body] = pair.value.split(" + ");
    preview.innerHTML = `<h2 style="font-family:${head}">Build better tools</h2><p style="font-family:${body}">Preview headings and body text with this pairing.</p>`;
  };
  pair.addEventListener("input", draw); draw();
}

function calculator(panel) {
  panel.innerHTML = `<input id="expr" value="(12 + 8) * 3"><div class="output" id="output"></div>`;
  const calc = () => output.textContent = /^[\d+\-*/().\s%]+$/.test(expr.value) ? Function(`return ${expr.value}`)() : "Only math symbols are allowed.";
  expr.addEventListener("input", calc); calc();
}

function percentage(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="a" type="number" value="20"><input id="b" type="number" value="150"></div><div class="output" id="output"></div>`;
  const calc = () => output.textContent = `${a.value}% of ${b.value} = ${Number(a.value) * Number(b.value) / 100}\nChange from ${a.value} to ${b.value} = ${((Number(b.value)-Number(a.value))/Number(a.value)*100).toFixed(2)}%`;
  document.querySelectorAll("input").forEach((el) => el.addEventListener("input", calc)); calc();
}

function bmi(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="kg" type="number" value="70"><input id="cm" type="number" value="175"></div><div class="output" id="output"></div>`;
  const calc = () => { const v = Number(kg.value) / ((Number(cm.value)/100) ** 2); output.textContent = `BMI: ${v.toFixed(1)}`; };
  document.querySelectorAll("input").forEach((el) => el.addEventListener("input", calc)); calc();
}

function age(panel) {
  panel.innerHTML = `<input id="dob" type="date"><div class="output" id="output"></div>`;
  dob.addEventListener("input", () => {
    const days = Math.floor((Date.now() - new Date(dob.value)) / 86400000);
    output.textContent = `${Math.floor(days / 365.2425)} years\n${days} days`;
  });
}

function tip(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="bill" type="number" value="1000"><input id="tipv" type="number" value="10"><input id="people" type="number" value="2"></div><div class="output" id="output"></div>`;
  const calc = () => { const total = Number(bill.value) * (1 + Number(tipv.value)/100); output.textContent = `Total: ${total.toFixed(2)}\nPer person: ${(total/Number(people.value)).toFixed(2)}`; };
  document.querySelectorAll("input").forEach((el) => el.addEventListener("input", calc)); calc();
}

function pomodoro(panel) {
  timerPanel(panel, 25 * 60);
}

function stopwatch(panel) {
  timerPanel(panel, 0, true);
}

function timerPanel(panel, initialSeconds, up = false) {
  let seconds = initialSeconds, id = null;
  panel.innerHTML = `<div class="output" id="time" style="font-size:48px;text-align:center"></div><div class="tool-actions"><button class="primary" id="start">Start</button><button class="secondary" id="pause">Pause</button><button class="danger" id="reset">Reset</button></div>`;
  const draw = () => time.textContent = `${String(Math.floor(seconds/60)).padStart(2,"0")}:${String(seconds%60).padStart(2,"0")}`;
  document.querySelector("#start").onclick = () => { clearInterval(id); id = setInterval(() => { seconds += up ? 1 : -1; if (seconds < 0) seconds = 0; draw(); }, 1000); };
  pause.onclick = () => clearInterval(id);
  reset.onclick = () => { seconds = initialSeconds; draw(); };
  draw();
}

function notepad(panel) {
  panel.innerHTML = `<textarea id="note" placeholder="Write notes..."></textarea><p class="chip">Autosaves in this browser</p>`;
  note.value = localStorage.getItem("developer-tools-note") || "";
  note.addEventListener("input", () => localStorage.setItem("developer-tools-note", note.value));
}

function screen(panel) {
  panel.innerHTML = `<button class="primary" onclick="location.reload()">Refresh</button><div class="output">${escapeHtml(`Viewport: ${innerWidth} x ${innerHeight}\nScreen: ${screen.width} x ${screen.height}\nPixel ratio: ${devicePixelRatio}\nUser agent: ${navigator.userAgent}`)}</div>`;
}

function coin(panel) {
  panel.innerHTML = `<button class="primary" id="flip">Flip Coin</button><div class="output" id="output"></div>`;
  flip.onclick = () => output.textContent = Math.random() > 0.5 ? "Heads" : "Tails"; flip.click();
}

function dice(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="count" type="number" value="2"><input id="sides" type="number" value="6"></div><button class="primary" id="roll">Roll</button><div class="output" id="output"></div>`;
  roll.onclick = () => output.textContent = Array.from({ length: Number(count.value) }, () => 1 + Math.floor(Math.random() * Number(sides.value))).join(", "); roll.click();
}

function randomNumber(panel) {
  panel.innerHTML = `<div class="mini-grid"><input id="min" type="number" value="1"><input id="max" type="number" value="100"></div><button class="primary" id="go">Generate</button><div class="output" id="output"></div>`;
  go.onclick = () => output.textContent = Math.floor(Number(min.value) + Math.random() * (Number(max.value) - Number(min.value) + 1)); go.click();
}

function blindness(panel) {
  panel.innerHTML = `<input id="color" type="color" value="#38bdf8"><select id="filter"><option>Protanopia</option><option>Deuteranopia</option><option>Tritanopia</option></select><div class="preview-box" id="preview"></div><div class="output" id="output"></div>`;
  const draw = () => {
    const c = color.value; preview.style.background = c; preview.style.filter = { Protanopia: "sepia(.35) hue-rotate(315deg)", Deuteranopia: "sepia(.25) hue-rotate(45deg)", Tritanopia: "sepia(.4) hue-rotate(165deg)" }[filter.value]; output.textContent = "Approximate CSS filter preview.";
  };
  document.querySelectorAll("#color,#filter").forEach((el) => el.addEventListener("input", draw)); draw();
}

function fileToolHtml(label, outputLabel) {
  return `<div class="field"><label>${label}</label><input id="file" type="file" accept="image/*"></div><div class="field"><label>${outputLabel}</label><div class="output" id="output"></div></div>`;
}
function readImage(event, cb) {
  const file = event.target.files[0]; if (!file) return;
  const reader = new FileReader(); reader.onload = () => cb(reader.result); reader.readAsDataURL(file);
}
function decodeJwt(token) {
  const parts = token.split(".");
  return JSON.stringify({ header: JSON.parse(atob(parts[0] || "")), payload: JSON.parse(atob(parts[1] || "")) }, null, 2);
}
function simplePretty(value) {
  return value.replace(/></g, ">\n<").replace(/[{};]/g, (m) => m + "\n").split("\n").map((line) => line.trim()).filter(Boolean).join("\n");
}
function markdownToHtml(md) {
  return escapeHtml(md).replace(/^### (.*)$/gm, "<h3>$1</h3>").replace(/^## (.*)$/gm, "<h2>$1</h2>").replace(/^# (.*)$/gm, "<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/^- (.*)$/gm, "<li>$1</li>").replace(/\n/g, "<br>");
}
function wordStats(text) {
  const words = text.trim().match(/\S+/g) || [];
  return `Words: ${words.length}\nCharacters: ${text.length}\nCharacters without spaces: ${text.replace(/\s/g, "").length}\nLines: ${text ? text.split(/\r?\n/).length : 0}\nSentences: ${(text.match(/[.!?]+/g) || []).length}`;
}
function convertCase(text, action) {
  const words = text.toLowerCase().match(/[a-z0-9]+/g) || [];
  if (action === "Upper") return text.toUpperCase();
  if (action === "Lower") return text.toLowerCase();
  if (action === "Snake") return words.join("_");
  if (action === "Kebab") return words.join("-");
  if (action === "Camel") return words.map((w, i) => i ? w[0].toUpperCase() + w.slice(1) : w).join("");
  return words.map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}
function stringUtil(text, action) {
  if (action === "Reverse") return [...text].reverse().join("");
  if (action === "Sort Lines") return text.split(/\r?\n/).sort().join("\n");
  if (action === "Unique Lines") return [...new Set(text.split(/\r?\n/))].join("\n");
  return text.trim();
}
function slugify(text) { return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function escapeHtml(text) { return String(text).replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m])); }
function decodeEntities(text) { const box = document.createElement("textarea"); box.innerHTML = text; return box.value; }
function hex(buffer) { return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join(""); }
function cronPart(part) { return part === "*" ? "every value" : part?.startsWith("*/") ? `every ${part.slice(2)}` : part || "not set"; }
function simplify(a, b) { const g = gcd(a, b); return `${a/g}:${b/g}`; }
function gcd(a,b) { return b ? gcd(b, a % b) : a; }
function copy(text) { navigator.clipboard?.writeText(text || ""); toast("Copied"); }
function toast(message) { const el = document.createElement("div"); el.className = "badge"; el.style.cssText = "position:fixed;right:18px;bottom:18px;z-index:50"; el.textContent = message; document.body.append(el); setTimeout(() => el.remove(), 1600); }

const morseMap = { A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----." };
function toMorse(text) { return text.toUpperCase().split("").map((c) => c === " " ? "/" : morseMap[c] || c).join(" "); }
function fromMorse(code) { const rev = Object.fromEntries(Object.entries(morseMap).map(([k,v]) => [v,k])); return code.split(" ").map((c) => c === "/" ? " " : rev[c] || c).join(""); }
function drawMatrix(text) {
  const canvas = document.querySelector("#qr"), ctx = canvas.getContext("2d"), cells = 29, size = canvas.width / cells;
  ctx.fillStyle = "#fff"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = "#06121c";
  let seed = [...text].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  for (let y=0;y<cells;y++) for (let x=0;x<cells;x++) { seed = (seed * 9301 + 49297) % 233280; if (seed / 233280 > .58) ctx.fillRect(x*size, y*size, size, size); }
  [[2,2],[20,2],[2,20]].forEach(([x,y]) => { ctx.fillRect(x*size,y*size,7*size,7*size); ctx.fillStyle="#fff"; ctx.fillRect((x+1)*size,(y+1)*size,5*size,5*size); ctx.fillStyle="#06121c"; ctx.fillRect((x+2)*size,(y+2)*size,3*size,3*size); });
}

function setupSearch() {
  const dialog = document.querySelector("#searchDialog"), input = document.querySelector("#searchInput");
  window.openSearchDialog = () => { dialog.showModal(); input.value = ""; renderSearch(""); input.focus(); };
  document.querySelector("#openSearch").onclick = openSearchDialog;
  document.querySelector("#closeSearch").onclick = () => dialog.close();
  input.addEventListener("input", () => renderSearch(input.value));
  window.addEventListener("keydown", (event) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openSearchDialog(); } });
}
function renderSearch(query) {
  const q = query.toLowerCase();
  const matches = tools.filter((tool) => `${tool.name} ${tool.description}`.toLowerCase().includes(q)).slice(0, 30);
  document.querySelector("#searchResults").innerHTML = matches.length ? matches.map((tool) => `<a href="${tool.path}" onclick="searchDialog.close()"><strong>${tool.name}</strong><p>${tool.description}</p></a>`).join("") : `<div class="empty">No matching tools</div>`;
}
function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("developer-tools-theme", next);
}
document.documentElement.dataset.theme = localStorage.getItem("developer-tools-theme") || "dark";
init();
