import type { LinkItem } from "@/data/profile";

export default function LinkCard({ label, url, icon }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-2xl border border-black/10 bg-black/[.03] px-5 py-4 text-base font-medium transition-colors hover:bg-black/[.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current active:bg-black/[.09] dark:border-white/15 dark:bg-white/[.06] dark:hover:bg-white/[.10] dark:active:bg-white/[.14]"
    >
      <span aria-hidden className="text-lg">
        {icon}
      </span>
      <span className="flex-1 text-center">{label}</span>
      <span aria-hidden className="text-lg opacity-0">
        {icon}
      </span>
    </a>
  );
}
