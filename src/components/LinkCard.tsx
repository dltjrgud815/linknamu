import Link from "next/link";
import type { LinkItem } from "@/data/profile";

const cardClassName =
  "group flex w-full items-center gap-4 rounded-3xl border border-white/70 bg-white/45 px-5 py-4 shadow-[0_8px_24px_-12px_rgba(150,90,50,0.22)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_14px_30px_-14px_rgba(150,90,50,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c98a63] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export default function LinkCard({ label, url, icon, description }: LinkItem) {
  const isInternal = url.startsWith("/");
  const isExternalHttp = /^https?:\/\//.test(url);

  const content = (
    <>
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-lg"
      >
        {icon}
      </span>
      <span className="flex flex-1 flex-col items-center text-center">
        <span className="text-[15px] font-medium">{label}</span>
        {description && (
          <span className="mt-0.5 text-xs text-muted/80">{description}</span>
        )}
      </span>
      <span aria-hidden className="size-10 shrink-0" />
    </>
  );

  if (isInternal) {
    return (
      <Link href={url} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={url}
      className={cardClassName}
      // mailto 등은 같은 탭에서 열고, 외부 웹 링크만 새 탭으로 연다
      {...(isExternalHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
