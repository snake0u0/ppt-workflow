import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, verifyToken } from "@/lib/auth";

// 로그인 쿠키가 유효하지 않으면 모든 경로를 /login 으로 리다이렉트.
// (목록/뷰어/발표 서빙(/p)/공용 자산(/shared) 전부 보호)
export async function middleware(req: NextRequest) {
  const token = req.cookies.get(AUTH_COOKIE)?.value;
  if (await verifyToken(token)) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  url.searchParams.set("from", req.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  // login 페이지 / 로그인·로그아웃 API / Next 정적 자산 / favicon 만 공개
  matcher: ["/((?!login|api/login|api/logout|_next/static|_next/image|favicon.ico).*)"],
};
