export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export type LinkItem = {
  /** 클릭 수 집계 시 사용할 고유 키 */
  id: string;
  label: string;
  url: string;
  /** 카드 왼쪽에 표시할 이모지 아이콘 */
  icon: string;
};

export const profile: Profile = {
  name: "이석형",
  bio: "AI와 결합한 임베디드 BSP 개발자",
  avatarUrl: "/avatar.svg",
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com/", icon: "💻" },
  { id: "blog", label: "블로그", url: "https://velog.io/", icon: "✍️" },
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/", icon: "🔗" },
];
