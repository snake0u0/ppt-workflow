# 첨부 자료 목록

`assets/` 안의 파일이 **어느 슬라이드에 쓰이는지** 정리한 표다. 배치의 근거는
어디까지나 `DRAFT.md` 의 `![]()` 참조이고, 이 문서는 그것을 읽기 쉽게 편 것이다.
둘이 어긋나면 **`DRAFT.md` 가 맞다.**

---

## 슬라이드별 자산

| 슬라이드 | 제목 | 자산 | 배치 지시 |
|---|---|---|---|
| 5 | 2. 실험 | `referece-1.png` `reference-2.png` `reference-3.png` `reference-4.png` | 4장을 작게 줄여 **한 행** |
| 6 | 2. 실험 | `crewai_1.png` `crewai_2.png` `crewai_3.png` | 3장을 작게 줄여 **한 행** |
| 7 | 2. 실험 | `marp-workspace.png` `marp-1.png` `marp-2.png` / `latex-workspace.png` `latex-1.png` `latex-2.png` | marp 3장 한 행, latex 3장 한 행 (**행 2개**) |
| 8 | 2. 실험 | `claude-code-html-1.png` `claude-code-html-2.png` | 2장을 작게 줄여 **한 행** |
| 9 | 2. 실험 | `notebooklm.png` `notebooklm-slide.png` `claude-for-ppt.png` | 지시 없음. 각 항목(7번/8번) 아래에 붙는 그림 |
| 12 | 4. 범용 워크플로우 | `workflow-1.png` `workflow-2.png` | 2장을 **한 행** |
| 13 | 5. 개인 맞춤형 워크플로우 | `workflow-3.png` | 이 슬라이드는 그림 한 장짜리. 크게 |
| 16 | 5. 개인 맞춤형 워크플로우 | `elements.png` `draft.png` | 본문 오른쪽에 `draft.png`, 그 아래 폭 전체에 `elements.png`. 이미지 **오른쪽 정렬** |
| 17 | 5. 개인 맞춤형 워크플로우 | `make-labmeeting.png` `deck-build.png` | 지시 없음 |
| 18 | 5. 개인 맞춤형 워크플로우 | `workflow-3.png` (재등장) + `playing.mp4` `prompt.mp4` | 영상 2개. 아래 "영상 처리" 참고 |
| 20 | 7. HTML 활용 예시 | `don-burgers-pred-1..6` (6장) | **한 장씩 늘어놓지 말 것.** 오른쪽에 인터랙티브 figure 1개로 합쳐 설정 전환 |
| 21 | (HTML 조각) | `gemini-gcoo.mp4` (HTML 안에 참조) | gcoo 프로젝트 표지 예시. `DRAFT-RULES.md` 7항 참고 |

`workflow-3.png` 는 13번과 18번 **두 슬라이드에 의도적으로 중복** 등장한다.
중복이 아니라 원고대로다.

## 자산 성격

읽는 사람이 그림만 보고는 뭔지 모를 수 있어 덧붙인다. **슬라이드에 캡션으로
넣으라는 뜻이 아니다.** 원고에 캡션 문장이 없으면 캡션 없이 그림만 넣는다.

- `referece-1` ~ `reference-4`: 디자인 시스템을 만들 때 참고한 외부 PPT 캡처
- `crewai_1~3`: CrewAI 멀티에이전트로 뽑은 발표자료 결과 화면
- `marp-workspace`, `marp-1~2`: VSCode marp 작업 화면과 결과 슬라이드
- `latex-workspace`, `latex-1~2`: LaTeX Workshop 작업 화면과 결과 슬라이드
- `claude-code-html-1~2`: Claude Code 로 만든 HTML 발표자료 결과
- `notebooklm`, `notebooklm-slide`: NotebookLM 화면과 생성된 슬라이드
- `claude-for-ppt`: PowerPoint 안에서 Claude Chat 을 쓰는 화면
- `workflow-1`, `workflow-2`: 범용 워크플로우 2종 다이어그램
- `workflow-3`: 최종 개인화 워크플로우 다이어그램
- `elements.png`: 발표 폴더 구성(assets/, DRAFT.md, index.html, meta.json) 트리
- `draft.png`: DRAFT.md 작성 화면
- `make-labmeeting.png`: `/make-labmeeting` 스킬 문서
- `deck-build.png`: 스킬이 참조하는 공통 규칙 파일
- `don-burgers-pred-1..6`: Burgers 방정식 DeepONet 예측 결과. 같은 샘플(i=11)에
  하이퍼파라미터만 바꾼 것. 순서는 기본 → Tanh → node(128) → lr 1e-4 → L-BFGS → 최종

## 영상 처리

| 파일 | 크기 | 쓰이는 곳 |
|---|---|---|
| `playing.mp4` | 29 MB | 18번 슬라이드 - 프로젝트 사용 시연 |
| `gemini-gcoo.mp4` | 19 MB | 21번 슬라이드 - gcoo 표지 배경 |
| `prompt.mp4` | 4.5 MB | 18번 슬라이드 - 프롬프트 입력 시연 |

영상 3개가 약 53 MB로, `assets/` 전체 용량(약 57 MB)의 대부분이다. **업로드
용량이 걸리면 mp4 는 빼고 이미지만 올린다.** 그 경우 해당 자리는 영상이 들어갈
빈 자리(플레이스홀더)로 두고, 나중에 이쪽 프로젝트로 옮길 때 실제 `<video>` 로
채운다. 영상 자체를 삭제하거나 정지 이미지로 대체하지는 않는다.

## 쓰지 않는 파일

`assets/` 에 있지만 `DRAFT.md` 가 참조하지 않는 파일이다. **어느 슬라이드에도
넣지 않는다.**

- `index-html.png`
- `initial.png`
- `meta-json.png`
- `personal-workflow.png`

내용상 어울려 보여도 넣지 않는다. 넣을지 말지는 원고가 정한다.
