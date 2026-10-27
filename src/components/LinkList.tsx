import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <nav aria-label="링크 목록" className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} {...link} />
      ))}
    </nav>
  );
}
