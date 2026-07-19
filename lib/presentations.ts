import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

export type Presentation = {
  slug: string;
  title: string;
  date: string | null;
  event: string | null;
  theme: string | null;
};

const ROOT = join(process.cwd(), "presentations");

/** 보이는 발표 폴더만 (언더스코어/점 시작 제외). */
function isVisibleDir(name: string): boolean {
  return !name.startsWith("_") && !name.startsWith(".");
}

export async function getPresentations(): Promise<Presentation[]> {
  let entries;
  try {
    entries = await readdir(ROOT, { withFileTypes: true });
  } catch {
    return [];
  }
  const slugs = entries
    .filter((e) => e.isDirectory() && isVisibleDir(e.name))
    .map((e) => e.name);

  const list = await Promise.all(slugs.map(readMeta));
  // 날짜 내림차순 (없으면 뒤로), 동일하면 제목순
  return list.sort((a, b) => {
    const d = (b.date ?? "").localeCompare(a.date ?? "");
    return d !== 0 ? d : a.title.localeCompare(b.title);
  });
}

export async function readMeta(slug: string): Promise<Presentation> {
  let meta: Record<string, unknown> = {};
  try {
    const parsed = JSON.parse(await readFile(join(ROOT, slug, "meta.json"), "utf8"));
    // 객체가 아니면(null/배열/원시값) slug 폴백 — 잘못된 meta.json 하나가 전체 목록을 무너뜨리지 않게
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      meta = parsed as Record<string, unknown>;
    }
  } catch {
    // meta.json 없거나 깨짐 → slug 폴백
  }
  const str = (v: unknown) => (typeof v === "string" && v.trim() ? v : null);
  return {
    slug,
    title: str(meta.title) ?? slug,
    date: str(meta.date),
    event: str(meta.event),
    theme: str(meta.theme),
  };
}

export async function presentationExists(slug: string): Promise<boolean> {
  if (!isVisibleDir(slug) || slug.includes("/") || slug.includes("..")) {
    return false;
  }
  try {
    const entries = await readdir(ROOT, { withFileTypes: true });
    return entries.some((e) => e.isDirectory() && e.name === slug);
  } catch {
    return false;
  }
}
