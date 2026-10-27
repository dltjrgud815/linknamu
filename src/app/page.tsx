import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative isolate flex flex-1 flex-col overflow-hidden">
      {/* 글래스 카드 뒤로 비칠 은은한 색 번짐 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 -z-10 size-72 rounded-full bg-[#ffd9bf]/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-24 -z-10 size-80 rounded-full bg-[#ffe7c7]/80 blur-3xl"
      />

      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-6 pt-20 pb-10 sm:pt-24">
        <Profile {...profile} />
        <div className="mt-12 w-full">
          <LinkList links={links} />
        </div>
        <footer className="mt-auto pt-16 text-xs tracking-wide text-muted/70">
          © {new Date().getFullYear()} 링크나무
        </footer>
      </main>
    </div>
  );
}
