import type { NextConfig } from "next";

// 발표는 prod 에서 정적(public/decks/, gen-decks.mjs 가 빌드 시 복사)으로 서빙하고,
// 홈/뷰어는 빌드 타임에 presentations/ 를 읽어 정적 생성한다.
// 따라서 런타임 fs 트레이싱(outputFileTracingIncludes)이 필요 없다.
const nextConfig: NextConfig = {};

export default nextConfig;
