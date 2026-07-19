import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, checkCredentials, createToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const id = String(form.get("id") ?? "");
  const password = String(form.get("password") ?? "");
  const fromRaw = String(form.get("from") ?? "/");
  // 오픈 리다이렉트 방지: 같은 사이트 절대경로만 허용
  const from = fromRaw.startsWith("/") && !fromRaw.startsWith("//") ? fromRaw : "/";

  if (!checkCredentials(id, password)) {
    const url = new URL("/login", req.url);
    url.searchParams.set("error", "1");
    url.searchParams.set("from", from);
    return NextResponse.redirect(url, { status: 303 });
  }

  const res = NextResponse.redirect(new URL(from, req.url), { status: 303 });
  res.cookies.set(AUTH_COOKIE, await createToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30일
  });
  return res;
}
