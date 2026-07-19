// presentations/<slug>/ → public/decks/<slug>/ (정적 서빙용 복사)
// - 정크 제외(*.Zone.Identifier, *.zip)
// - 진입 파일 정규화(index.html, 없으면 단일 *.html 을 index.html 로)
// - 진입 HTML 에 공용 폰트/인쇄 링크 주입 (서빙 시점이 아니라 복사 시점)
// prod 빌드(prebuild)에서만 실행. dev 는 /p 라우트로 실시간 서빙하므로 불필요.

import { readdir, mkdir, copyFile, readFile, writeFile, rm } from "node:fs/promises";
import { join, extname } from "node:path";

const SRC = "presentations";
const OUT = "public/decks";

function isJunk(name) {
  return name.includes("Zone.Identifier") || extname(name).toLowerCase() === ".zip";
}
function isHidden(name) {
  return name.startsWith("_") || name.startsWith(".");
}

const SHARED_HEAD =
  '\n    <link rel="stylesheet" href="/shared/fonts.css">' +
  '\n    <link rel="stylesheet" href="/deck-print.css" media="print">' +
  '\n    <script src="/lightbox.js" defer></script>' +
  '\n    <script src="/deck-nav.js" defer></script>';

function inject(html) {
  if (html.includes("/deck-print.css")) return html;
  if (/<head[^>]*>/i.test(html)) return html.replace(/<head[^>]*>/i, (m) => m + SHARED_HEAD);
  if (/<html[^>]*>/i.test(html)) {
    return html.replace(/<html[^>]*>/i, (m) => `${m}<head>${SHARED_HEAD}\n  </head>`);
  }
  return SHARED_HEAD + html;
}

// 진입 파일 결정: index.html 우선, 없으면 (정크 아닌) 단일 *.html
function pickEntry(fileNames) {
  if (fileNames.includes("index.html")) return "index.html";
  const htmls = fileNames.filter(
    (f) => extname(f).toLowerCase() === ".html" && !isJunk(f),
  );
  return htmls.length === 1 ? htmls[0] : null;
}

async function copyTree(src, dst, entryName) {
  await mkdir(dst, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const e of entries) {
    if (isJunk(e.name)) continue;
    const s = join(src, e.name);
    if (e.isDirectory()) {
      await copyTree(s, join(dst, e.name), null); // 하위 디렉토리엔 진입파일 개념 없음
    } else if (e.isFile()) {
      const isEntry = e.name === entryName;
      const outPath = join(dst, isEntry ? "index.html" : e.name);
      if (isEntry) {
        await writeFile(outPath, inject(await readFile(s, "utf8")), "utf8");
      } else {
        await copyFile(s, outPath);
      }
    }
  }
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  let dirs;
  try {
    dirs = await readdir(SRC, { withFileTypes: true });
  } catch {
    dirs = [];
  }
  const slugs = dirs.filter((d) => d.isDirectory() && !isHidden(d.name)).map((d) => d.name);

  let count = 0;
  for (const slug of slugs) {
    const top = (await readdir(join(SRC, slug), { withFileTypes: true }))
      .filter((e) => e.isFile())
      .map((e) => e.name);
    const entry = pickEntry(top);
    if (!entry) {
      console.warn(`[gen-decks] ${slug}: index.html(또는 단일 .html) 없음 — 뷰어가 비어 보일 수 있음`);
    }
    await copyTree(join(SRC, slug), join(OUT, slug), entry);
    count++;
  }
  console.log(`[gen-decks] ${count} decks → ${OUT}`);
}

await main();
