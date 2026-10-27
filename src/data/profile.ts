export type Profile = {
  name: string;
  /** 이름 아래 표시할 직무 한 줄 */
  role: string;
  /** 지금 하는 일을 설명하는 소개 */
  bio: string;
  /** 추구하는 가치관 한 문장 (따옴표 없이 작성) */
  motto: string;
  avatarUrl: string;
};

export type LinkItem = {
  /** 클릭 수 집계 시 사용할 고유 키 */
  id: string;
  label: string;
  /** 외부 URL, mailto:, 또는 "/"로 시작하는 내부 경로 */
  url: string;
  /** 카드 왼쪽에 표시할 이모지 아이콘 */
  icon: string;
  /** 카드 안에 작게 표시할 보조 설명 (선택) */
  description?: string;
};

export const profile: Profile = {
  name: "이석형",
  role: "임베디드 Linux · RTOS BSP 개발자",
  bio: "Embedded Linux BSP와 Unity 앱 개발을 모두 경험한 임베디드 개발자입니다. 지금은 앤씨앤에서 Novatek SoC 기반 블랙박스 BSP를 맡아, 부트로더와 센서 브링업부터 비디오 파이프라인까지 보드 위 소프트웨어 전 구간을 다룹니다.",
  motto: "도전을 두려워하지 않고, 새로운 도전으로 나를 성장시키자",
  avatarUrl: "/avatar.svg",
};

export const links: LinkItem[] = [
  {
    id: "resume",
    label: "경력 & 포트폴리오",
    url: "/resume",
    icon: "📄",
    description: "경력 · 프로젝트 · 기술 스택 한눈에 보기",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/dltjrgud815",
    icon: "💻",
    description: "@dltjrgud815",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/seokhyounglee",
    icon: "🔗",
    description: "in/seokhyounglee",
  },
  {
    id: "blog",
    label: "블로그",
    url: "https://stone-bro.tistory.com",
    icon: "✍️",
    description: "stone-bro.tistory.com",
  },
  {
    id: "email",
    label: "이메일",
    url: "mailto:dltjrgud815@gmail.com",
    icon: "✉️",
    description: "dltjrgud815@gmail.com",
  },
];
