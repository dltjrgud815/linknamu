import type { Project } from "@/data/resume";
import { TagList } from "@/components/resume/Tag";

export default function ProjectItem({ title, period, role, summary, bullets, tech, links, award }: Project) {
  return (
    <article className="rounded-2xl bg-white/50 p-4 ring-1 ring-white/80 sm:p-5">
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        <time className="text-xs text-muted">{period}</time>
      </div>
      {award && (
        <p className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#ffe9d6] px-2.5 py-0.5 text-xs font-medium text-[#9a5a35]">
          🏆 {award}
        </p>
      )}
      <p className="mt-2 text-xs text-[#b4704a]">{role}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed marker:text-[#d9a989]">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <TagList items={tech} />
        {links && links.length > 0 && (
          <ul className="flex gap-3 text-sm font-medium">
            {links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b4704a] underline-offset-4 hover:underline"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
