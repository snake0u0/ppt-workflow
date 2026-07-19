# ppt-workflow

HTML 슬라이드 발표자료를 **한 저장소에서 만들고 미리보고 배포**하는 Next.js 사이트입니다.
폰트와 디자인 토큰(테마)을 프로젝트 안에 두기 때문에, 발표를 작성하는 시점부터 색·폰트·레이아웃이 자동으로 적용됩니다. 매번 폰트/이미지/디자인 파일을 옮길 필요가 없습니다.

- 발표 목록 갤러리 / 풀스크린 뷰어 / PDF 인쇄
- 공용 폰트 자동 `@font-face` (Pretendard · Paperlogy · Inter)
- 디자인 가이드(테마) 라이브러리 - 테마를 고르면 색·폰트가 자동 적용
- 단일 계정 로그인 보호 (주소를 알아도 로그인 없이는 못 봄)
- Claude Code 용 발표 빌드 스킬/워크플로우 포함 (`.claude/`, `design-guide/`)

이 저장소에는 발표자료(개인 슬라이드)는 포함되어 있지 않습니다. 빈 템플릿(`presentations/_template/`)과 테마만 들어 있으니, 아래 순서대로 본인 발표를 만들면 됩니다.

## 1. 설치

```bash
git clone https://github.com/snake0u0/ppt-workflow.git
cd ppt-workflow
npm install
```

## 2. 환경변수 설정 (필수)

이 사이트는 단일 계정 로그인으로 보호됩니다. **직접 아이디·비밀번호·시크릿을 설정해야** 정상 동작합니다.

`.env.example` 을 복사해 `.env` 를 만듭니다. (`.env` 는 `.gitignore` 에 의해 커밋되지 않습니다.)

```bash
cp .env.example .env
```

`.env` 를 열어 다음 값을 채웁니다.

| 키 | 설명 |
|---|---|
| `SITE_ID` | 로그인 아이디 (기본값 `1234` - 본인 값으로 변경) |
| `SITE_PASSWORD` | 로그인 비밀번호 (기본값 `1234` - 본인 값으로 변경) |
| `AUTH_SECRET` | 쿠키 서명용 시크릿. **비어 있으면 로그인이 되지 않습니다.** 반드시 직접 생성해 채워야 합니다. |

### AUTH_SECRET 생성 방법

길고 무작위한 문자열이면 됩니다. 아래 중 편한 방법으로 생성해 `.env` 의 `AUTH_SECRET=` 뒤에 붙여넣습니다.

```bash
# 방법 1) openssl
openssl rand -hex 32

# 방법 2) Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

예:

```env
SITE_ID=myid
SITE_PASSWORD=mypassword
AUTH_SECRET=3f9c1a...(위 명령이 출력한 값)
```

> 이 시크릿은 로그인 쿠키를 서명하는 데 쓰입니다. 외부에 노출하지 말고, 배포 환경에도 같은 방식으로 각자 생성한 값을 넣으세요.

## 3. 개발 서버 실행

```bash
npm run dev              # http://localhost:3000
# 포트 3000 이 사용 중이면:
npm run dev -- -p 3100   # http://localhost:3100
```

브라우저에서 열면 로그인 페이지가 뜹니다. `.env` 에 설정한 아이디/비밀번호로 로그인합니다.
(로그인이 계속 실패하면 `AUTH_SECRET` 이 비어 있는지 확인하세요.)

## 4. 새 발표 만들기

```bash
npm run new -- <slug> [theme]
# 예: npm run new -- 2026-07-demo white-navy
```

- `presentations/_template/` 를 복사해 `presentations/<slug>/` 를 생성합니다 (16:9 1280×720, 테마·폰트 연결됨).
- 사용 가능한 theme: `white-navy`, `supabase`, `lime-green`, `inventoy`, `ferrari`, `minimal-navy` (= `design-guide/` 의 가이드 파일들).
- `presentations/<slug>/index.html` 을 편집하고 `npm run dev` 로 실시간 미리보기.

발표 폴더 구조:

```
presentations/<slug>/
  DRAFT.md       # 슬라이드 내용 초안 (marp 형식) - index.html 빌드의 원본
  index.html     # 발표 본체 (테마 토큰 var(--bg/--ink/--accent/--font-*) 사용)
  meta.json      # { title, date, event, theme }
  assets/        # 이 발표 전용 이미지 등 (선택)
```

### Claude Code 로 발표 빌드하기 (선택)

이 저장소는 Claude Code 워크플로우를 포함합니다. `DRAFT.md`(marp 형식 초안)를 쓰고, `design-guide/` 의 테마를 적용해 `index.html` 을 빌드하는 방식입니다. 자세한 규칙은 [`CLAUDE.md`](./CLAUDE.md) 와 `.claude/` 안의 스킬 문서를 참고하세요.

## 5. 폰트 추가

`fonts/<패밀리>/<패밀리>-<웨이트>.{woff2,otf,ttf}` 형식으로 넣으면 빌드 시 `@font-face` 가 자동 생성되어 모든 발표에 적용됩니다. 파일명의 웨이트(Thin…Black 또는 100…900)는 자동 매핑됩니다.

## 6. 디자인 가이드(테마)

- `design-guide/design-<name>.md` 가 테마의 원본 문서입니다.
- 빌드 시 `:root` 토큰/`{colors.*}` 표기를 파싱해 `public/shared/themes/<name>.css`(표준 토큰 + 폰트)를 생성합니다.
- 사이트의 `/design` 경로에서 가이드를 열람할 수 있습니다.
- `minimal-navy` 테마는 표지에 로고를 넣도록 되어 있습니다. 사용하려면 본인 로고를 `public/brand/logo.png` 에 두세요.

## 7. PDF 로 저장

뷰어 우상단 **PDF** 버튼 → 브라우저 인쇄 → "PDF로 저장". 슬라이드 1장 = 16:9 한 페이지로 출력됩니다.
(인쇄 대화상자에서 "배경 그래픽" 옵션을 켜면 배경색까지 출력됩니다.)

## 8. 배포 (Vercel 예시)

1. Vercel 에서 이 GitHub 저장소를 Import (프레임워크 자동 감지: Next.js).
2. Settings → Environment Variables 에 `SITE_ID` / `SITE_PASSWORD` / `AUTH_SECRET` 을 등록 (로컬 `.env` 와 동일하게, `AUTH_SECRET` 은 배포용으로 새로 생성해도 됩니다).
3. 배포. 이후 `main` 에 push 하면 자동 재배포됩니다.

## 스크립트

| 명령 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 (사전에 폰트/테마 생성) |
| `npm run new -- <slug> [theme]` | 새 발표 생성 |
| `npm run gen` | 폰트/테마 생성물 재생성 (`public/shared/`) |
| `npm run gen-thumbs` | 발표 첫 슬라이드 썸네일 생성 (dev 서버 실행 중이어야 함) |
