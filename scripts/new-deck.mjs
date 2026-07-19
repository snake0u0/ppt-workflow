// `npm run new <slug> [theme]` — _template 을 복사해 새 발표 폴더 생성 + 테마/메타 채움.
import { readdir, readFile, writeFile, cp, access } from "node:fs/promises";
import { join } from "node:path";

const TEMPLATE = "presentations/_template";
const ROOT = "presentations";
const DEFAULT_THEME = "white-navy";
const DEFAULT_EVENT = "lab";

function fail(msg) {
  console.error("✖ " + msg);
  process.exit(1);
}

const slug = process.argv[2];
const theme = process.argv[3] || DEFAULT_THEME;

if (!slug) fail("사용법: npm run new <slug> [theme]");
if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(slug)) {
  fail(`잘못된 slug: '${slug}' (영숫자/._- 만, 첫 글자는 영숫자, 슬래시 금지)`);
}

// 사용 가능한 테마 = design-guide/design-<name>.md
const guides = (await readdir("design-guide").catch(() => []))
  .filter((f) => /^design-.+\.md$/.test(f))
  .map((f) => f.replace(/^design-/, "").replace(/\.md$/, ""));
if (!guides.includes(theme)) {
  fail(`알 수 없는 theme: '${theme}'. 사용 가능: ${guides.join(", ")}`);
}

const target = join(ROOT, slug);
if (await access(target).then(() => true).catch(() => false)) {
  fail(`이미 존재합니다: ${target}`);
}

await cp(TEMPLATE, target, { recursive: true });

const today = new Date().toLocaleDateString("en-CA"); // 현지 기준 YYYY-MM-DD (UTC 어긋남 방지)
const fills = {
  __TITLE__: slug,
  __THEME__: theme,
  __DATE__: today,
  __EVENT__: DEFAULT_EVENT,
};

for (const file of ["index.html", "meta.json", "DRAFT.md"]) {
  const p = join(target, file);
  let s = await readFile(p, "utf8").catch(() => null);
  if (s === null) continue; // 템플릿에 해당 파일이 없으면 건너뜀
  for (const [k, v] of Object.entries(fills)) s = s.replaceAll(k, v);
  await writeFile(p, s, "utf8");
}

console.log(`✓ 생성: ${target}  (theme=${theme})`);
console.log(`  편집:    ${target}/index.html`);
console.log(`  미리보기: npm run dev → /view/${slug}`);
