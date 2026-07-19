import { readFile, stat, realpath } from "node:fs/promises";
import { join, normalize, sep } from "node:path";

// presentations/<slug>/<...path> 의 파일을 디스크에서 직접 서빙 (dev 실시간 편집용).
// prod 는 정적 public/decks/ 로 서빙하므로(뷰어가 /decks 사용) 이 라우트는 주로 dev 경로다.

const ROOT = join(process.cwd(), "presentations");

const TYPES: Record<string, string> = {
  html: "text/html; charset=utf-8",
  css: "text/css; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  mjs: "text/javascript; charset=utf-8",
  json: "application/json; charset=utf-8",
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  avif: "image/avif",
  ico: "image/x-icon",
  woff: "font/woff",
  woff2: "font/woff2",
  ttf: "font/ttf",
  otf: "font/otf",
  mp4: "video/mp4",
  webm: "video/webm",
  pdf: "application/pdf",
  txt: "text/plain; charset=utf-8",
  py: "text/plain; charset=utf-8",
  map: "application/json; charset=utf-8",
};

function contentType(file: string): string {
  const ext = file.split(".").pop()?.toLowerCase() ?? "";
  return TYPES[ext] ?? "application/octet-stream";
}

// 서빙하는 모든 덱 HTML 에 공용 스타일을 자동 주입:
// - 폰트(fonts.css): "fonts/ 에 넣으면 자동 적용"
// - 인쇄(deck-print.css, media=print): "슬라이드 1장 = 16:9 한 페이지" (어떤 덱이든)
const SHARED_HEAD =
  '\n    <link rel="stylesheet" href="/shared/fonts.css">' +
  '\n    <link rel="stylesheet" href="/deck-print.css" media="print">' +
  '\n    <script src="/lightbox.js" defer></script>' +
  '\n    <script src="/deck-nav.js" defer></script>';

function injectShared(html: string): string {
  if (html.includes("/deck-print.css")) return html;
  if (/<head[^>]*>/i.test(html)) {
    return html.replace(/<head[^>]*>/i, (m) => m + SHARED_HEAD);
  }
  if (/<html[^>]*>/i.test(html)) {
    return html.replace(/<html[^>]*>/i, (m) => `${m}<head>${SHARED_HEAD}\n  </head>`);
  }
  return SHARED_HEAD + html;
}

async function serveFile(file: string): Promise<Response> {
  const type = contentType(file);
  const data = await readFile(file);
  if (type.startsWith("text/html")) {
    const html = injectShared(data.toString("utf8"));
    return new Response(html, {
      headers: { "content-type": type, "cache-control": "no-store" },
    });
  }
  return new Response(new Uint8Array(data), {
    headers: {
      "content-type": type,
      "cache-control": "no-store",
    },
  });
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string; path?: string[] }> },
) {
  const { slug, path = [] } = await params;

  if (slug.startsWith("_") || slug.startsWith(".") || slug.includes("..")) {
    return new Response("Not found", { status: 404 });
  }

  const rel = path.length ? path.join("/") : "index.html";
  const base = join(ROOT, slug);
  const target = normalize(join(base, rel));

  // 경로 탈출 방지: target 은 반드시 base 하위여야 함
  if (target !== base && !target.startsWith(base + sep)) {
    return new Response("Forbidden", { status: 403 });
  }

  try {
    const s = await stat(target);
    const file = s.isDirectory() ? join(target, "index.html") : target;
    // 심볼릭 링크로 ROOT 밖을 가리키는 경우 차단 (lexical 검사 보강)
    const realRoot = await realpath(ROOT);
    const realFile = await realpath(file);
    if (realFile !== realRoot && !realFile.startsWith(realRoot + sep)) {
      return new Response("Forbidden", { status: 403 });
    }
    return await serveFile(file);
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
