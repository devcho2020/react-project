# React + Vite

<!-- 주석
    미리보기 : Ctrl+Shift+V
-->
## 프로젝트 종료
  기술 스택 변경을 위해 새 프로젝트로 진행
### 🔄 변경 후 사용할 기술 스택
  새로 사용할 기술 스택 : **Stack**: React + Vite + Vanilla Extract + React Query + React Router + Recoil + typescript
### 📌 종료 사유
  - **Tailwind CSS**: 학습시간에 과하게 투자되는것 같음.
  - **Recoil**: 대형 프로젝트에서 자주 사용될 것으로 보여 미리 학습하고자함


 ## 📦 기술 스택 버전
 **Stack**: React + Vite + Tailwind CSS + React Query + React Router + Zustand

| 라이브러리            | 버전 예시         |
|------------------------|-------------------|
| React                 | `18.2.0`            |
| Vite                  | `4.4.0`             |
| Tailwind CSS          | `3.3.0`             |
| React Router DOM      | `7.5.3`             |
| @tanstack/react-query | `5.75.4`             |
| Zustand               | `5.0.4`             |

## 🚀 설치 방법
1. **React + Vite 프로젝트 생성**
    ```bash
    npm create vite@latest . -- --template react
    ```

2. **Tailwind CSS 설치**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
    > ⚠️ 설치 오류 발생 시 `tailwind.config.js`, `postcss.config.js` 파일을 직접 생성하세요.

3. **React Router 설치**
    ```bash
    npm install react-router-dom
    ```

4. **React Query 설치**
    ```bash
    npm install @tanstack/react-query
    ```

5. **Zustand 설치**
    ```bash
    npm install zustand
    ```
> ⚠️ 버전 수정 시 `npm intall` 실행 필수!

### 🧩 추천 VS Code 확장팩

> 프로젝트 개발에 도움이 되는 확장팩 리스트입니다.

- [**ES7+ React/Redux/React-Native snippets**](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)  
  React 컴포넌트 템플릿 생성 단축키 (`rafce`, `rfc` 등) 지원

- [**Tailwind CSS IntelliSense**](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)  
  Tailwind 클래스 자동완성, 실시간 미리보기 제공

- [**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
  코드 포맷 자동 정리 및 스타일 일관성 유지

- [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
  코드 품질 검사, 오류/경고 표시로 버그 방지

- [**Path Intellisense**](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)  
  import 경로 자동완성 기능 제공

- [**Auto Rename Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)  
  HTML/JSX 태그를 수정할 때 여는 태그와 닫는 태그를 동시에 변경

- [**Auto Import**](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)  
  사용한 컴포넌트나 함수가 자동으로 import 되도록 지원

## 📁 폴더 구조 예시
```bash
src/
├── assets/
├── components/
├── context/
├── images/
├── pages/
├── store/
├── utils/
├── Layout.jsx
└── main.jsx
```

 ## ✨ 기능 소개

- 🔗 페이지 간 라우팅 (React Router)
- 🎨 Tailwind로 빠르게 스타일 적용
- 📦 서버 상태 관리 (React Query)
- 🧠 전역 상태 관리 (Zustand)
- ⚡ Vite 기반의 빠른 개발 환경

---

## 🛠 개발 계획

- [] 게시글 CRUD 기능
- [] 미니 게임 생성
  - [] 짱껨뽀
- []Dark Mode 기능 추가
<!-- 
- [ ] 게시글 CRUD 기능 추가
- [ ] 반응형 디자인 적용
- [ ] Dark Mode 기능 추가
- [ ] 상태 관리 고도화 (Zustand Slice 등) 
-->

---

## 🔗 배포 링크

<!-- > 👉 [배포 URL 바로가기](https://your-deploy-link.com) -->

_(배포 후 링크를 여기에 붙여주세요)_

---

<details>
  <summary>💡 VS Code 미리보기 팁 (클릭)</summary>

  Markdown 파일은 `Ctrl + Shift + V` 단축키로 미리보기를 볼 수 있어요!
</details>