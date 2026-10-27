"use client";

import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  function handleClick(id: string) {
    // 화면에는 표시하지 않고 MongoDB에만 집계. 새 탭으로 이동해도 요청이 끊기지 않도록 keepalive
    fetch(`/api/clicks/${encodeURIComponent(id)}`, { method: "POST", keepalive: true }).catch(
      () => {},
    );
  }

  return (
    <nav aria-label="링크 목록" className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} {...link} onClick={() => handleClick(link.id)} />
      ))}
    </nav>
  );
}
