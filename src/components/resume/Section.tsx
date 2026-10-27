import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

/** 글래스 카드 스타일의 섹션 컨테이너 */
export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="w-full rounded-3xl border border-white/70 bg-white/45 px-5 py-6 shadow-[0_8px_24px_-12px_rgba(150,90,50,0.22)] backdrop-blur-xl sm:px-7 sm:py-7"
    >
      <h2 id={`${id}-title`} className="text-lg font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}
