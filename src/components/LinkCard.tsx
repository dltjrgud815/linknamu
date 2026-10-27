import type { LinkItem } from "@/data/profile";

type Props = LinkItem & {
  onClick: () => void;
};

export default function LinkCard({ label, url, icon, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="group flex w-full items-center gap-4 rounded-3xl border border-white/70 bg-white/45 px-5 py-4 shadow-[0_8px_24px_-12px_rgba(150,90,50,0.22)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_14px_30px_-14px_rgba(150,90,50,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c98a63] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-lg"
      >
        {icon}
      </span>
      <span className="flex-1 text-center text-[15px] font-medium">{label}</span>
      <span aria-hidden className="size-10 shrink-0" />
    </a>
  );
}
