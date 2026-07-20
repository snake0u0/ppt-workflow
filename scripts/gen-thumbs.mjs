// 각 발표의 첫 슬라이드를 캡처해 public/thumbs/<slug>.png 로 저장 (홈 갤러리 벽돌 썸네일용).
// dev 서버(/p 라이브 서빙)가 떠 있어야 한다. 기본 포트 3100.
//   1) npm run dev -- -p 3100  (다른 터미널)
//   2) npm run gen-thumbs
// 인증: 로그인 API 로 쿠키를 받아 CDP 로 주입한다(자격증명은 .env.local 에서 읽음).
import { spawn, execFileSync } from "node:child_process";
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { mkdtempSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE = process.env.THUMB_BASE || "http://localhost:3100";
const OUT = "public/thumbs";
const W = 1280, H = 720;
// CHROME_PATH 로 직접 지정 가능. 없으면 아래 후보들을 순서대로 탐색.
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
  "/usr/bin/google-chrome",
  "/snap/bin/chromium",
].filter(Boolean);

async function readEnvLocal() {
  const env = {};
  // .env.local 이 먼저, 없으면 .env (리포에 따라 둘 중 하나만 있다)
  for (const file of [".env.local", ".env"]) {
    try {
      for (const line of (await readFile(file, "utf8")).split("\n")) {
        const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
        if (m && !(m[1] in env)) env[m[1]] = m[2];
      }
    } catch {}
  }
  return env;
}

async function visibleSlugs() {
  const entries = await readdir("presentations", { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith("."))
    .map((e) => e.name);
}

function pickChrome() {
  for (const c of CHROME_CANDIDATES) if (existsSync(c)) return c;
  throw new Error("no chromium binary found");
}

async function main() {
  const { SITE_ID, SITE_PASSWORD } = await readEnvLocal();
  if (!SITE_ID || !SITE_PASSWORD) throw new Error(".env.local 또는 .env 에 SITE_ID/SITE_PASSWORD 필요");

  // 로그인 → 쿠키
  const jar = join(mkdtempSync(join(tmpdir(), "thumb-")), "jar");
  execFileSync("curl", ["-s", "-c", jar, "-o", "/dev/null", "-X", "POST", `${BASE}/api/login`,
    "-F", `id=${SITE_ID}`, "-F", `password=${SITE_PASSWORD}`, "-F", "from=/"]);
  const cookie = (await readFile(jar, "utf8")).split("\n").find((l) => l.includes("ppt_auth"))?.split("\t").pop().trim();
  if (!cookie) throw new Error("로그인 쿠키 실패 — dev 서버가 떠 있는지 확인");

  const chromeBin = pickChrome();
  const udd = mkdtempSync(join(tmpdir(), "thumb-udd-"));
  const chrome = spawn(chromeBin, ["--headless", "--no-sandbox", "--disable-gpu",
    "--hide-scrollbars", "--remote-debugging-port=9350", `--user-data-dir=${udd}`,
    `--window-size=${W},${H}`, "about:blank"], { stdio: ["ignore", "ignore", "pipe"] });
  const wsURL = await new Promise((res, rej) => {
    let b = ""; const to = setTimeout(() => rej(new Error("chrome timeout")), 12000);
    chrome.stderr.on("data", (d) => { b += d; const m = b.match(/ws:\/\/[^\s]+/); if (m) { clearTimeout(to); res(m[0]); } });
  });

  let idc = 0; const pending = new Map(); const waiters = [];
  const ws = new WebSocket(wsURL); await new Promise((r) => (ws.onopen = r));
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) { const p = pending.get(msg.id); pending.delete(msg.id); msg.error ? p.reject(new Error(JSON.stringify(msg.error))) : p.resolve(msg.result); }
    else if (msg.method) for (let i = waiters.length - 1; i >= 0; i--) if (waiters[i].pred(msg)) { waiters[i].resolve(msg); waiters.splice(i, 1); }
  };
  const send = (m, p, s) => { const id = ++idc; return new Promise((resolve, reject) => { pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method: m, params: p || {}, sessionId: s })); }); };
  const waitEvent = (pred, ms = 15000) => new Promise((resolve, reject) => { const w = { pred, resolve }; waiters.push(w); setTimeout(() => { const i = waiters.indexOf(w); if (i >= 0) { waiters.splice(i, 1); reject(new Error("event timeout")); } }, ms); });

  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  const S = (m, p) => send(m, p, sessionId);
  await S("Page.enable"); await S("Network.enable"); await S("Runtime.enable");
  // dpr 2 로 캡처(2560x1440) — HiDPI 화면에서 카드가 크게 보여도 선명하게
  await S("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: 2, mobile: false });
  await S("Network.setCookie", { name: "ppt_auth", value: cookie, domain: "localhost", path: "/" });

  await mkdir(OUT, { recursive: true });
  const slugs = await visibleSlugs();
  let ok = 0;
  for (const slug of slugs) {
    try {
      const navP = waitEvent((m) => m.method === "Page.loadEventFired");
      await S("Page.navigate", { url: `${BASE}/p/${slug}/index.html` });
      await navP;
      await new Promise((r) => setTimeout(r, 900)); // fit()/폰트/이미지 로드 대기
      // 네비 UI(화살표·도트·힌트)는 썸네일에서 숨김
      await S("Runtime.evaluate", { expression: `(()=>{var s=document.createElement('style');s.textContent='#deck-nav-ui,.navdots,.hint,.nav-hint,.progress,.foot-nav,.pageno{display:none!important}';document.head.appendChild(s);})()` });
      await new Promise((r) => setTimeout(r, 60));
      const shot = await S("Page.captureScreenshot", { format: "webp", quality: 80, clip: { x: 0, y: 0, width: W, height: H, scale: 1 } });
      await writeFile(join(OUT, `${slug}.webp`), Buffer.from(shot.data, "base64"));
      console.log(`[gen-thumbs] ${slug}.webp`);
      ok++;
    } catch (e) {
      console.warn(`[gen-thumbs] ${slug} 실패: ${e.message}`);
    }
  }
  console.log(`[gen-thumbs] ${ok}/${slugs.length} → ${OUT}`);
  chrome.kill(); ws.close();
}

await main();
