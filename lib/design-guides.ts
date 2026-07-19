import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const GUIDE_DIR = join(process.cwd(), "design-guide");
const THEME_DIR = join(process.cwd(), "public/shared/themes");

export type Guide = {
  name: string;
  title: string;
  bg: string | null;
  accent: string | null;
  font: string | null;
};

function humanize(name: string): string {
  return name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

async function themeTokens(
  name: string,
): Promise<{ bg: string | null; accent: string | null; font: string | null }> {
  try {
    const css = await readFile(join(THEME_DIR, `${name}.css`), "utf8");
    const grab = (k: string) => {
      const m = css.match(new RegExp(`--${k}:\\s*([^;]+);`));
      return m ? m[1].trim() : null;
    };
    const fontRaw = grab("font-body");
    const font = fontRaw ? fontRaw.replace(/['"]/g, "").split(",")[0].trim() : null;
    return { bg: grab("bg"), accent: grab("accent"), font };
  } catch {
    return { bg: null, accent: null, font: null };
  }
}

export async function listGuides(): Promise<Guide[]> {
  let files: string[];
  try {
    files = await readdir(GUIDE_DIR);
  } catch {
    return [];
  }
  const names = files
    .filter((f) => /^design-.+\.md$/.test(f))
    .map((f) => f.replace(/^design-/, "").replace(/\.md$/, ""))
    .sort();
  return Promise.all(
    names.map(async (name) => ({
      name,
      title: humanize(name),
      ...(await themeTokens(name)),
    })),
  );
}

export async function readGuide(name: string): Promise<string | null> {
  if (!/^[a-z0-9-]+$/i.test(name)) return null;
  try {
    return await readFile(join(GUIDE_DIR, `design-${name}.md`), "utf8");
  } catch {
    return null;
  }
}
