export default function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-[#8a5a3c] ring-1 ring-[#e8cdb8]">
      {children}
    </span>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
