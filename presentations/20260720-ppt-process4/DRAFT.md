---
marp: true
---

# AI를 활용한 발표자료 제작 워크플로우

2026-07-20

전북대학교 산업정보시스템공학과
김도형

---

## 목차

1. 배경
2. 실험
3. 실험 결론
4. 워크플로우
5. 개인 맞춤형 워크플로우
6. 결론
7. 활용 예시
8. Appendix

---

## 1. 배경

▣ 문제 인식
- 주기적인 발표자료 제작, 디자인 작업에서 피로감 발생 <!--AI를 발표자료 제작에 활요한 계기-->
- AI Agent의 발전 및 적용사례 증가 <!--으로 발표자료 제작 자동화와 관련한 시도들 존재--> 
- 교수님의 관심 <!--결정적 요인-->
→ 목표 설정: AI를 활용한 발표자료 제작 워크플로우를 정립

▣ 하위 문제
- 발표내용 작성 → 인간의 영역
- 발표자료 디자인 → AI의 영역

---

## 2. 실험
 
▣ 평가기준
1) 디자인이 괜찮은가(품질)
2) 수식 작성에 문제가 없는가
3) 수정이 용이한가
4) 작업 시간이 오래걸리지 않는가

---

## 2. 실험

▣ 해본 시도들 8가지)
1) CrewAI, 2) Claude Design, 3) Marp, 4) LaTeX Workshop
5) Claude Code - PPT, 6) Claude Code - HTML, 7) NotebookLM, 8) Claude for PPT

▣ 디자인 시스템에 참고한 PPT
![referemce-1](./assets/referece-1.png)
![referemce-2](./assets/reference-2.png)
![referemce-3](./assets/reference-3.png)
![referemce-4](./assets/reference-4.png)
<!-- @claude: 위의  네 개 이미지들을 작게 조정해서 하나의 행으로 배치해줘. -->

---

## 2. 실험

▣ 각 시도별 결과
1) CrewAI: 멀티에이전트 프레임워크, '논문리뷰'를 위한 AI 에이전트, 발표자료에 대해 내용작성 부터 발표자료 제작까지 담당 
- 평가: 낮은 품질, 수식 작성 문제, PPT이기에 수정 용이, 30분 이상 ppt 제작 시간, 추가적인 비용 소모 
![crewai_1](./assets/crewai_1.png)
![crewai_2](./assets/crewai_2.png)
![crewai_3](./assets/crewai_3.png)
<!-- @claude: 위의 세 개 이미지들을 작게 조정해서 하나의 행으로 배치해줘. -->

※ 멀티에이전트 프레임워크: API로 ai들을 호출 및 상호작용하게하여 하나의 작업을 분담하여 완료하게 해주는 프레임워크. Crewai, AutoGen, Langraph
<!--Markder 라이브러리: pdf를 마크다운 파일로 변환해주는 라이브러리. 이미지 추출 및 메타데이터도 가능. 수식깨짐이 없음. 유사 라이브러리: Naugat(유지보수가 안되어 호환성 문제 존재)-->

2) Claude Design: Claude에서 PPT 및 웹디자인을 위해 내놓은 서비스
- 평가: 적절한 품질, 수식 렌더링 일부 오류(수정 가능) <!--별도의 지시가 없을 시 클로드 특유 색감으로 디자인 수렴-->
                - 수정 비교적 용이<!--개별 요소 이동 및 ai로 편집 가능-->, 적절한 작업시간, 토큰 사용량 문제
→ 이전보다 개선된 것으로 보여 앞으로 워크플로우 개인화 예정
![claude-design-1](./assets/claude-design-1.png)
![claude-design-1](./assets/claude-design-2.png)
![claude-design-1](./assets/claude-design-3.png)
<!-- @claude: 위의 세 개 이미지들을 작게 조정해서 하나의 행으로 배치해줘. -->

---

## 2. 실험

3) Marp: IDE에서 마크다운 파일 미리보기 시 16:9 슬라이드 형식으로 보게해주는 익스텐션, 테마 적용 가능
- 평가: 낮은 품질, 수식 렌더링 문제 x, 수정 어려움(PDF 또는 PPT로 변환 시 변환된 개별 슬라이드들이 배경으로 인식 → PPT 내 수정 불가), 적당한 작업시간
![marp-workspace](./assets/marp-workspace.png)
![marp-1](./assets/marp-1.png)
![marp-2](./assets/marp-2.png)
<!-- @claude: 위의 세 개 이미지들을 작게 조정해서 하나의 행으로 배치해줘. -->
<!--IDE에서 마크다운문서를 작성할 때, 프리뷰 모드에서 ppt처럼 16:9의 비율 슬라이드 형식으로 볼 수 있게 해주는 vscode extension. md 파일 고유 문법 사용 가능 및 문서 내에서도 테마 설정도 가능하다는 점이 높은 가능성을 샀으나 pdf 또는 ppt로 변환시에 변환된 개별 슬라이드들이 배경으로 인식되어 추후 수정에 어려움이 있어 보류.-->

4) LaTex Workshop: VSCode에서 LaTeX 문서를 편집∙컴파일 하게 해주는 익스텐션, 테마 적용 가능
- 평가: 낮은 품질, 수식 렌더링 문제 x, 수정 어려움, 적당한 작업시간, 어색한 문법 <!---->
![latex-workspace](./assets/latex-workspace.png)
![latex-1](./assets/latex-1.png)
![latex-2](./assets/latex-2.png)
<!-- @claude: 위의 세 개 이미지들을 작게 조정해서 하나의 행으로 배치해줘. -->

---

## 2. 실험

5) Claude Code - PPT: PPT 기본 테마에 내용 작성 후 Claude Code에게 디자인 부탁 
- 평가: 낮음 품질, 수식 렌더링 오류, 수정 용이, 긴 작업 시간, 토큰 사용량 문제

6) Claude Code - HTML: 마크다운 파일에 내용 작성 후 Claude Code에게 디자인 부탁
- 평가: 적절한 품질, 수식 렌더링 문제 x, 수정 어려움, 적당한 작업시간
![claude-code-html-1](./assets/claude-code-html-1.png)
![claude-code-html-2](./assets/claude-code-html-2.png)
<!-- @claude: 위의 두개 이미지들을 작게 조정해서 하나의 행으로 배치해줘. -->

---

## 2. 실험

7) NotebookLM: Google에서 AI 기반 문서 요약 및 인사이트 제공 서비스, 이미지 제작 및 슬라이드 제작 기능 존재
- 평가: 수정의 어려움, 각 슬라이드가 하나의 이미지로 제작, 낮은 품질
![notebooklm](./assets/notebooklm.png)
![notebooklm-slide](./assets/notebooklm-slide.png)

8) Caude for PPT: PPT 내에서 Claude Chat을 불러올 수 있는 Claude 서비스
- 평가: 낮은 품질, 수식 렌더링 문제, 수정 용이, 긴 작업 시간, 원하는 요청사항을 LLM이 제대로 반영하지 못함. 토큰 사용량 문제
![claude-for-ppt](./assets/claude-for-ppt.png)

---

## 3. 실험 결론

▣ 발표도구
- 발표내용 작성: Markdown, LaTeX, HTML <!--편한 문법 선택 사용-->
- AI: Claude Code, Claude Design, 기타 LLM 모델들
- 발표 도구: PPT, HTML
- PPT: 직접 figure 직접 제작 가능 및 협업이 가능하다. 수정이 용이하다. Power Point 자체가 LLM 친화적이지 않다. <!--품질, 토큰, 시간, 수식 --> 
- HTML: LLM 친화적이다. 토큰 소모가 적고, 작업시간이 적절. 직접 figure를 만들거나 자료 직접 수정에 어려움이 있다. <!--AI를 쓸거면 HTML 낫다고 생각한다.-->
<!--pdf는 html 또는 ppt로 만든 이후 변환의 과정을 거쳐 만들어지기에 제외-->

▣ 개인적인 선택
- Markdown 발표내용 작성
- Claude Code를 활용해 HTML 파일로 발표자료 제작
- figure는 당시의 SOTA 이미지 생성 모델 활용(현재: ChatGPT Image 2.0)

---

## 3. 실험 결론

▣ 발표자료 제작 시 중요한 점
- 디자인 시스템: md파일에 자연어로 색상 코드, 디자인 스타일, 요소별 폰트 및 이미지 배치, 레이아웃, 브랜드 컨셉 등을 명시한 파일
- 디자인 시스템을 통해 AI에 요구사항을 명확히 전달하기 <!--잘 만든 디자인 시스템 하나가 앞으로를 편하게해준다.-->
- 디자인 시스템 제작 방법: getdesign.md에서 파일 하나를 선택, 참고할 레퍼런스 이미지나 기존 파일들(3-5개 추천), 테마(미니멀, 팝아트 등), 폰트들을 AI에게 전달하여 입맞에 맞는 디자인 시스템 제작 추천
- [getdesign](https://getdesign.md)
- 폰트 적용이 필요할 경우 폰트 파일을 같이 업로드하기

---

## 4. 워크플로우

(1) 랩미팅 또는 내부회의 같은 반복적이고 디자인의 중요도가 높지 않은 경우
(2) 수업 발표나 외부에서 임팩트 있게 디자인을 신경써서 만들어야 되는 경우

![1번 워크플로우](./assets/workflow-1.png)
- 디자인, 사진 배치등을 일부 포기한다.

![2번 워크플로우](./assets/workflow-2.png)
- PPT로 변환을 위해 클로드 디자인을 사용한다.
<!-- @claude: 위의 두 개 사진들 하나의 행으로 배치해줘. -->

---

## 5. 개인 맞춤형 워크플로우

![최종 워크플로우](./assets/workflow-3.png)

---

## 5. 개인 맞춤형 워크플로우

▣ 배경
- HTML로 프로젝트 제작 시 폴더형태로 발표자료를 가지고 다녀야되는 불편함 발생
- 매번 폰트, 디자인 시스템, 이미지, 선호하는 발표 제작 규칙 등을 가져와 AI에게 넣어주어야 하는 번거로움 발생

▣ 목적
1. 발표 내용만 작성하고 나머지는 AI에게 맡기자. <!--디자인 및 발표자료 제작은 AI Agent가 저장해둔 디자인 시스템을 활용해 담당하도록 한다.-->
2. 디자인을 지속적으로 활용하고 재현 가능하도록 하자. <!--폰트, 색상 등 몇 개의 디자인 시스템을 모두 집어넣고 유지보수하며 지속적으로 -->
3. AI에 의해 발표 내용 원본이 오염되는 것을 방지하자. <!--md파일은 작성자만, html 파일은 AI가 수정하도록 작업 파일을 분리-->
4. 어디서나 편리하게 발표자료를 사용하고, 발표자료들을 아카이빙 하자. <!--여러 실험결과 완성도 및 토큰, 속도 측면에서 효율적인-->

---

## 5. 개인 맞춤형 워크플로우

▣ 과정
1. 구현하고자 하는 것에 대해 Claude Code에게 얘기. 및 grill-me 스킬을 통해 원하는 바를 명확히 하여 PRD 초안 작성.
2. PRD.md 검토 후 수정 등 프로젝트 목적 및 기능 구체화
3. PLAN.md에 PRD.md에서 작성한 프로젝트 목적 및 기능들 구현 계획 체크리스트 형태로 작성
4. Claude Code 활용해 구현. 각 단계가 끝나면 체크리스트에 체크 및 검증하도록 지시.
5. 완성된 프로젝트에 이전에 만들었던 HTML 발표자료들 및 디자인 시스템, 폰트들 이전
6. Github 리포 연결 및 Vercel을 활용하여 배포

※ girll-me 스킬: matt pocock 제작. 애매한 질문을 명확히 하도록 AI가 사용자에게 질의를 통해 원하는 바를 명확히 하는 스킬, https://github.com/mattpocock/skills <!--matt pocock: typescript 교육자 겸 AI 엔지니어. -->
※ PRD.md: Product Requirement Document, 무엇을 왜 만들지, 사용자가 누구고 어떻게 쓸지, 핵심 기능이 뭔지, 어떤 기술스택을 사용할건지를 정하는 문서. 
※ PLAN.md: PRD에서 바탕으로 실제 구현 수서를 체크리스트화한 문서, 클로드의 작업순서를 정리한 실행계획서

---

## 5. 개인 맞춤형 워크플로우

▣ 개별 발표자료 구성
- assets/: 첨부 이미지, 동영상 등 첨부파일들의 저장위치
- DRAFT.md: 발표 내용을 작성할 파일, '---'으로 슬라이드를 구분
- index.html: AI가 만들 실제 발표 자료
- meta.json: 제목, 제작일자, 테마, 발표 카테고리를 담은 메타데이터 저장 파일 


![초안](./assets/draft.png)
![폴더구성](./assets/elements.png)
<!-- @claude: 내용 오른쪽에 [초안] 사진을 그리고 내용과 초안 사진 아래에다가 [폴더구성] 이미지 배치해줘. [폴더구성] 이미지는 좀 더 커도 될 거 같아. 이미지는 이 페이지의 이미지는 오른쪽 정렬해줘.-->

---

## 5. 개인 맞춤형 워크플로우

▣ 발표자료 제작 방법
1. 발표 폴더 및 폴더 내 assets폴더와 DRAFT.md 생성
- 폴더 구성요소: assets/, DRAFT.md, index.html, meta.json
2. DRAFT.md에 발표 내용 작성
3. "/make-labmeeting '@DRAFT.md 파일경로'" → AI Agent가 발표자료 생성 후 배포
- /make-labmeeting 스킬: 폴더의 DRAFT.md를 읽고, 랩미팅용 디자인으로 index.html 및 meta.json을 작성, 
                         스크린샷으로 전체 디자인 체크, 자동 배포하는 마크다운 문서로 된 스킬
4. 발표자료 확인 후 수정할 사항 일괄 지시 후 검토 과정 반복
5. 수정했던 내용 디자인 시스템에도 수정사항 반영하여 업데이트

![스킬](./assets/make-labmeeting.png)
![참고파일](./assets/deck-build.png)

---

## 5. 개인 맞춤형 워크플로우

▣ 개인화된 워크플로우
![최종 워크플로우](./assets/workflow-3.png)

▣ 프로젝트 사용 영상
<video src="./assets/playing.mp4" controls></video>
<video src="./assets/prompt.mp4" controls></video>

---

## 6. 결론

- 발표 자료를 만드는데 들이는 시간은 비슷 <!--내용 작성에 더 많은 시간을 들이다보니 비슷한 시간을 사용하게 되는 경향. PPT 디자인 작업은 효율화 했으니 내용 작성 측면 효율화하는 방안으로 나아가야됨-->
- 프로젝트로 워크플로우를 만들고, 반복적으로 AI에게 요청하는 것들은 스킬로서 저장 및 자동화 해두면 작업 효율성 맟 완성도 증대.
```
ex) "DRAFT.md 원문 그대로 발표자료 제작해줘","객체들 정렬과 배치 신경써줘" 등 → /skill-creator를 이용해서 '/verify' 라는 스킬로 제작 → 새롭게 보이는 문제점 스킬에 업데이트 "사진들 테두리 없애주고 /verify 스킬 업데이트해줘." → "/skill-creator 이용해서 /make-labmeeting 스킬을 사용하면 /verify 스킬과 00디자인 시스템 이용해서 발표자료 만들고 배포하는 스킬 만들어줘."
 ```
- 클로드 디자인 사용을 위해 발표내용과 관련 파일들, 디자인 시스템 및 폰트, 컨텍스트를 넘겨주기 위한 skill 제작

※ skill-creator: /plugin을 통해서 설치 가능하고 클로드에서 공식 지원하는 스킬 제작용 플러그인

---

## 7. HTML 활용 예시

![기본](./assets/don-burgers-pred-1-base.png)
![Tanh](./assets/don-burgers-pred-2-tanh.png)
![node(128)](./assets/don-burgers-pred-3-node128.png)
![lr 1e-4](./assets/don-burgers-pred-4-lr1e4.png)
![L-BFGS](./assets/don-burgers-pred-5-lbfgs.png)
![최종](./assets/don-burgers-pred-6-final.png)
<!-- @claude: 위 6장은 Burgers 방정식 DeepONet 을 같은 샘플(i=11)에 대해 하이퍼파라미터만 바꿔 돌린 예측 결과다.
     한 장씩 배치하지 말고, 페이지 오른쪽에 인터랙티브 figure 하나로 만들어줘.
     마우스로 설정을 바꾸면 해당 설정의 결과 그림으로 바뀌게. 지금 어떤 설정인지 라벨도 같이 보여줘.
     순서는 파일명 번호 순(기본 → Tanh → node(128) → lr 1e-4 → L-BFGS → 최종). -->
※ DeepONet(Burgers, 샘플 i=11) 예측 u_pred(x,t) - 마우스로 설정을 바꿔 결과를 비교할 수 있다.
※ 설정마다 컬러바 범위가 달라 색만으로 직접 비교하기보다 컬러바 눈금을 함께 볼 것.

---

 <!-- 01 · COVER (full-bleed video) -->
  <section class="stage"><article class="slide cover">
    <video class="cover-bg" src="assets/gemini-gcoo.mp4" autoplay muted loop playsinline></video>
    <div class="cover-scrim"></div>
    <header class="s-head">
      <div class="brand"><span class="bmark">G</span><span class="bword">GCOO<span class="bsub">3D Modeling</span></span></div>
    </header>
    <div class="s-body">
      <div class="lcol" style="flex:1;justify-content:flex-end">
        <div class="eyebrow">3D 프린팅과 디자인 사고 · 텀프로젝트</div>
        <h1 class="d-xxl">GCOO 전기자전거<br>3D 모델링</h1>
        <div class="teamrow mt-l">
          <span class="tlabel">팀원</span>
          <span class="pill">김도형</span><span class="pill">김영환</span><span class="pill">양정훈</span><span class="pill">최송빈</span><span class="pill">최찬빈</span>
        </div>
      </div>
    </div>
  </article></section>
<!-- @claude: 이거 gcoo 프레젠테이션 프로젝트의 1페이지 가져온거야. 참고해 -->

---

## 7. HTML 활용 예시

html 활용한 예시 효과입니다.

---

## 8. Appendix - 디자인 참고하기 좋은 사이트

- https://getdesign.md
- https://kr.pinterest.com/
- https://www.behance.net/
- https://dribbble.com/
- https://www.awwwards.com/

- https://github.com/snake0u0/ppt-workflow
