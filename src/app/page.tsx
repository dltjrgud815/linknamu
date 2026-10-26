import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-8 px-5 py-12 sm:py-16">
      <Profile {...profile} />
      <LinkList links={links} />
      <footer className="mt-auto pt-8 text-xs text-black/40 dark:text-white/40">
        © {new Date().getFullYear()} 링크나무
      </footer>
    </main>
  );
}
