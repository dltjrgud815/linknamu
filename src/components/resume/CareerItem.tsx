import type { Career } from "@/data/resume";
import { TagList } from "@/components/resume/Tag";

export default function CareerItem({ company, team, period, summary, highlights, tech }: Career) {
  return (
    <article className="relative border-l-2 border-[#e8cdb8] pl-5">
      <span aria-hidden className="absolute top-1.5 -left-[7px] size-3 rounded-full bg-[#c98a63] ring-4 ring-[#fff4e8]" />
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold">{company}</h3>
        <time className="text-xs text-muted">{period}</time>
      </div>
      <p className="text-sm text-[#b4704a]">{team}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed marker:text-[#d9a989]">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-3">
        <TagList items={tech} />
      </div>
    </article>
  );
}
