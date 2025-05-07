# React + Vite

<!-- 주석
    미리보기 : Ctrl+Shift+V
-->

 **Stack**: React + Vite + Tailwind CSS + React Query + React Router + Zustand

 ## 📦 기술 스택 버전

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

## 📁 폴더 구조 예시
```bash
src/
├── pages/
│   ├── Home.jsx
│   └── About.jsx
├── components/
│   └── Header.jsx
├── store/
│   └── userStore.js
├── api/
│   └── queryClient.js
├── App.jsx
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

- [ ] 로그인 / 회원가입 구현
- [ ] 게시글 CRUD 기능 추가
- [ ] 반응형 디자인 적용
- [ ] Dark Mode 기능 추가
- [ ] 상태 관리 고도화 (Zustand Slice 등)

---

## 🔗 배포 링크

> 👉 [배포 URL 바로가기](https://your-deploy-link.com)

_(배포 후 링크를 여기에 붙여주세요)_

---

<details>
  <summary>💡 VS Code 미리보기 팁 (클릭)</summary>

  Markdown 파일은 `Ctrl + Shift + V` 단축키로 미리보기를 볼 수 있어요!
</details>