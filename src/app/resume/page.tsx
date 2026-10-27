import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/resume/Section";
import CareerItem from "@/components/resume/CareerItem";
import ProjectItem from "@/components/resume/ProjectItem";
import { TagList } from "@/components/resume/Tag";
import { profile } from "@/data/profile";
import { careers, currentWork, educations, intro, projects, skills } from "@/data/resume";

export const metadata: Metadata = {
  title: `${profile.name} · 경력 & 포트폴리오 | 링크나무`,
  description: intro.headline,
};

const navItems = [
  { href: "#now", label: "지금 하는 일" },
  { href: "#career", label: "경력" },
  { href: "#projects", label: "프로젝트" },
  { href: "#skills", label: "기술" },
  { href: "#education", label: "교육 · 수상" },
];

export default function ResumePage() {
  return (
    <div className="relative isolate flex flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 -z-10 size-72 rounded-full bg-[#ffd9bf]/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 -z-10 size-80 rounded-full bg-[#ffe7c7]/80 blur-3xl"
      />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-5 pt-8 pb-12 sm:px-6 sm:pt-12">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/60 px-3.5 py-1.5 text-sm font-medium text-muted ring-1 ring-white/80 transition hover:bg-white/80 hover:text-foreground"
        >
          ← 링크나무로 돌아가기
        </Link>

        <header className="mt-8">
          <p className="text-sm font-medium tracking-wide text-[#b4704a]">{profile.role}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="mt-3 text-lg leading-snug font-medium">{intro.headline}</p>
          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-4 text-sm italic text-muted/80">“{profile.motto}”</p>
        </header>

        <nav aria-label="섹션 바로가기" className="mt-6 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <ul className="flex gap-2 whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block rounded-full bg-white/60 px-3.5 py-1.5 text-sm text-muted ring-1 ring-white/80 transition hover:bg-white/80 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-6">
          <Section id="now" title={currentWork.title} subtitle={currentWork.period}>
            <ul className="space-y-4">
              {currentWork.items.map((item) => (
                <li key={item.title} className="rounded-2xl bg-white/50 p-4 ring-1 ring-white/80">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="career" title="경력">
            <div className="space-y-8">
              {careers.map((career) => (
                <CareerItem key={career.company} {...career} />
              ))}
            </div>
          </Section>

          <Section id="projects" title="프로젝트">
            <div className="space-y-4">
              {projects.map((project) => (
                <ProjectItem key={project.title} {...project} />
              ))}
            </div>
          </Section>

          <Section id="skills" title="기술 스택">
            <dl className="space-y-4">
              {skills.map((group) => (
                <div key={group.label}>
                  <dt className="mb-1.5 text-xs font-medium tracking-wide text-[#b4704a]">{group.label}</dt>
                  <dd>
                    <TagList items={group.items} />
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="education" title="교육 · 수상 · 자격">
            <ul className="space-y-4">
              {educations.map((edu) => (
                <li key={edu.title} className="flex flex-col gap-0.5">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-semibold">{edu.title}</h3>
                    <time className="text-xs text-muted">{edu.period}</time>
                  </div>
                  <p className="text-xs text-[#b4704a]">{edu.org}</p>
                  {edu.note && <p className="text-sm text-muted">{edu.note}</p>}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <footer className="mt-12 flex flex-col items-center gap-3 text-center text-xs tracking-wide text-muted/70">
          <Link
            href="/"
            className="rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-muted ring-1 ring-white/80 transition hover:bg-white/80 hover:text-foreground"
          >
            ← 링크나무로 돌아가기
          </Link>
          <span>© {new Date().getFullYear()} 링크나무</span>
        </footer>
      </main>
    </div>
  );
}
