// 단일 계정 로그인용 HMAC 서명 쿠키. Web Crypto 만 사용(미들웨어 edge/node 모두 동작).
// 자격증명/시크릿은 환경변수(SITE_ID, SITE_PASSWORD, AUTH_SECRET)에서 읽는다.

export const AUTH_COOKIE = "ppt_auth";
const PAYLOAD = "authed-v1";

function secret(): string {
  return process.env.AUTH_SECRET ?? "";
}

function toHex(buf: ArrayBuffer): string {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function hmac(data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return toHex(sig);
}

/** 로그인 성공 시 발급할 토큰. */
export async function createToken(): Promise<string> {
  return `${PAYLOAD}.${await hmac(PAYLOAD)}`;
}

/** 쿠키 토큰 검증. 시크릿 미설정이면 항상 false(fail-closed). */
export async function verifyToken(token: string | undefined): Promise<boolean> {
  if (!token || !secret()) return false;
  const dot = token.lastIndexOf(".");
  if (dot < 0) return false;
  const value = token.slice(0, dot);
  const mac = token.slice(dot + 1);
  if (value !== PAYLOAD) return false;
  return mac === (await hmac(PAYLOAD));
}

/** id/pw 가 환경변수와 일치하는지. */
export function checkCredentials(id: string, password: string): boolean {
  const u = process.env.SITE_ID;
  const p = process.env.SITE_PASSWORD;
  return Boolean(u && p && id === u && password === p);
}
