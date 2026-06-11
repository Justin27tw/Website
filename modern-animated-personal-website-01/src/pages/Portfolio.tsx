import { useState } from "react";
import { useReveal } from "../hooks";
import { projects } from "../config";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Portfolio() {
  const categories = ["全部", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [filter, setFilter] = useState("全部");
  const filtered = filter === "全部" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-32 pb-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <span className="section-label mb-6 inline-block">PORTFOLIO</span>
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              精選<span className="gradient-text">作品</span>
            </h1>
            <p className="mt-6 text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
              這是我近年來參與的部分代表性專案，每一個都是心血結晶。
            </p>
          </div>
        </Reveal>

        {/* Category filters */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                  filter === c ? "btn-primary" : "btn-outline"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Featured project */}
        {filter === "全部" && (
          <Reveal delay={150}>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="section-label">FEATURED</span>
                <span className="text-sm" style={{ color: "var(--muted)" }}>最推薦的三個作品</span>
              </div>
              <div className="grid lg:grid-cols-3 gap-5">
                {projects.filter((p) => p.featured).map((p, i) => (
                  <FeaturedCard key={p.id} project={p} delay={i * 100} />
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* All projects grid */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">ALL WORKS</span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>共 {filtered.length} 個作品</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 60} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-20 text-center">
            <p className="mb-4 text-lg" style={{ color: "var(--muted)" }}>想要看更多作品？</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn-outline px-7 py-4 rounded-2xl font-bold text-sm inline-flex items-center gap-3"
            >
              <span>前往 GitHub</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  desc: string;
  tags: string[];
  gradient: string;
  year: string;
  featured?: boolean;
}

function FeaturedCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <div className="reveal visible" style={{ transitionDelay: `${delay}ms` }}>
      <div className="card rounded-[2rem] overflow-hidden h-full group cursor-pointer relative">
        <div className={`aspect-[16/10] relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
          <div className="absolute inset-0 opacity-40"
               style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-black text-8xl text-white/90 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
              {project.title.charAt(0)}
            </span>
          </div>
          <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
            <span className="glass px-3 py-1.5 rounded-full text-xs font-bold text-white">{project.category}</span>
            <span className="glass px-3 py-1.5 rounded-full text-xs font-bold text-white">{project.year}</span>
          </div>
          <div className="absolute bottom-5 right-5 w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-black mb-2">{project.title}</h3>
          <div className="text-sm font-bold mb-3" style={{ color: "var(--accent)" }}>{project.subtitle}</div>
          <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="chip text-xs font-bold px-2.5 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <div className="reveal visible" style={{ transitionDelay: `${delay}ms` }}>
      <div className="card rounded-[2rem] overflow-hidden h-full group cursor-pointer">
        <div className={`aspect-[4/3] relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
          <div className="absolute inset-0 opacity-40"
               style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 0%, transparent 50%)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-black text-7xl text-white/90 group-hover:scale-110 transition-transform duration-700">
              {project.title.charAt(0)}
            </span>
          </div>
          <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] font-bold text-white">{project.year}</div>
          <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">{project.category}</div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-black mb-2">{project.title}</h3>
          <div className="text-xs font-bold mb-3" style={{ color: "var(--accent)" }}>{project.subtitle}</div>
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>{project.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] font-bold chip px-2 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
