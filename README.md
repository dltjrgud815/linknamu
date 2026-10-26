# 링크나무 (linknamu)

내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 Link-in-Bio 서비스.
자세한 요구사항은 [PRD.md](./PRD.md), 화면 초안은 [wireframe.png](./wireframe.png) 참고.

## 기술 스택

- Next.js 16 (App Router) / React 19
- TypeScript
- Tailwind CSS v4
- MongoDB Atlas (링크 클릭 수 저장) — *미연동*
- Vercel 배포

## 개발

```bash
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 빌드
npm start       # 빌드 결과 실행
npm run lint    # ESLint
```

## 구조

```
src/
  app/
    layout.tsx      # 루트 레이아웃 (메타데이터, 한글 폰트)
    page.tsx        # 링크나무 메인 페이지
    globals.css     # Tailwind + 테마 변수
  components/
    Profile.tsx     # 프로필 사진 / 이름 / 한줄 소개
    LinkCard.tsx    # 링크 카드 1개
    LinkList.tsx    # 링크 카드 목록
  data/
    profile.ts      # 프로필 · 링크 데이터와 타입 정의
```

## 환경 변수

`.env.local.example` 을 `.env.local` 로 복사해 값을 채웁니다. `.env.local` 은 커밋하지 않습니다.

```bash
cp .env.local.example .env.local
```

## 남은 작업

- [ ] MongoDB Atlas 연결 및 링크별 클릭 수 집계 API
- [ ] 실제 프로필 사진을 `public/avatar.svg` 대신 교체
