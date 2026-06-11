import { useReveal } from "../hooks";
import { profile, skills, experiences, stats } from "../config";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function About() {
  return (
    <div className="pt-32 pb-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-20">
            <span className="section-label mb-6 inline-block">ABOUT ME</span>
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              關於<span className="gradient-text">我</span>
            </h1>
            <p className="mt-6 text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
              一位對細節執著、對體驗偏執的創作者。
            </p>
          </div>
        </Reveal>

        {/* Bio + Avatar */}
        <div className="grid lg:grid-cols-5 gap-10 mb-32">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                <div
                  className="absolute inset-0 animate-gradient"
                  style={{
                    background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 50%, var(--accent-3) 100%)",
                    backgroundSize: "200% 200%",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-black text-[18rem] text-white/20 leading-none">
                    {profile.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 opacity-40"
                     style={{
                       backgroundImage: "radial-gradient(circle at 30% 20%, white 0%, transparent 40%), radial-gradient(circle at 70% 80%, white 0%, transparent 40%)",
                     }} />
                {/* decorative */}
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-display tracking-widest text-white/80 mb-1">BASED IN</div>
                    <div className="font-black text-white">{profile.location}</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl animate-wave">
                    👋
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 animate-float hidden md:block">
                <div className="metric-num text-3xl">{stats[0].value}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>YEARS EXP</div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float hidden md:block" style={{ animationDelay: "1.5s" }}>
                <div className="metric-num text-3xl">{stats[1].value}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>PROJECTS</div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={200}>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-2xl md:text-3xl font-black leading-tight">
                你好，我是 <span className="gradient-text">{profile.name}</span>，
                一位來自{profile.location}的{profile.title}。
              </p>
              <p style={{ color: "var(--muted)" }}>
                {profile.description}
              </p>
              <p style={{ color: "var(--muted)" }}>
                我相信設計與程式並非二分，而是解決問題的兩種語言。從優雅的動畫、細緻的互動到穩健的架構，每一個細節都是對「體驗」的雕琢。
              </p>
              <p style={{ color: "var(--muted)" }}>
                工作之外，我熱愛攝影、電子音樂、機械鍵盤，以及鑽研各種新的技術與框架。如果你也對這些議題有興趣，歡迎一起交流。
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {[
                { label: "姓名", value: profile.name, icon: "👤" },
                { label: "所在地", value: profile.location, icon: "📍" },
                { label: "Email", value: profile.email, icon: "✉️" },
                { label: "狀態", value: "開放接案中", icon: "🟢" },
              ].map((info) => (
                <div key={info.label} className="card rounded-2xl p-5 flex items-center gap-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div className="min-w-0">
                    <div className="text-xs mb-1" style={{ color: "var(--muted)" }}>{info.label}</div>
                    <div className="font-bold text-sm truncate">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download resume */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2">
                <span>寄信給我</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <button className="btn-outline px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2">
                <span>下載履歷</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Skills */}
        <Reveal>
          <div className="mb-14">
            <span className="section-label mb-6 inline-block">MY SKILLS</span>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              專業<span className="gradient-text">技能</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mb-32">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-bold">{s.name}</span>
                  <span className="text-[10px] font-bold tracking-widest chip px-2 py-1 rounded-full">
                    {s.category}
                  </span>
                </div>
                <span className="font-display font-black text-sm gradient-text">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "color-mix(in srgb, var(--text) 8%, transparent)" }}>
                <div
                  className="h-full rounded-full progress-shine animate-gradient"
                  style={{
                    width: `${s.level}%`,
                    background: "linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3))",
                    backgroundSize: "200% 200%",
                    transition: "width 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Experience timeline */}
        <Reveal>
          <div className="mb-14">
            <span className="section-label mb-6 inline-block">EXPERIENCE</span>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              工作<span className="gradient-text">經歷</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
               style={{ background: "linear-gradient(180deg, var(--accent), var(--accent-2), transparent)" }} />

          {experiences.map((e, i) => (
            <RevealSection key={i} idx={i} e={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RevealSection({ idx, e }: { idx: number; e: typeof experiences[0] }) {
  const ref = useReveal<HTMLDivElement>();
  const isRight = idx % 2 === 1;
  return (
    <div ref={ref} className={`reveal relative mb-14 md:grid md:grid-cols-2 md:gap-12`} style={{ transitionDelay: `${idx * 150}ms` }}>
      <div className={`${isRight ? "md:order-2 md:pl-12" : "md:text-right md:pr-12"} pl-6 md:pl-0`}>
        <div className="card rounded-3xl p-6 md:p-8 inline-block text-left w-full md:max-w-md">
          <div className="font-display text-xs font-bold tracking-widest gradient-text mb-3">{e.year}</div>
          <h3 className="text-2xl font-black mb-2">{e.title}</h3>
          <div className="text-sm font-bold mb-4" style={{ color: "var(--accent)" }}>@ {e.company}</div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{e.desc}</p>
        </div>
      </div>
      <div className="hidden md:block" />
      {/* Dot */}
      <div className="absolute left-3 md:left-1/2 top-8 -translate-x-1/2 timeline-dot">
        <div className="relative w-4 h-4 rounded-full border-4 z-10"
             style={{ background: "var(--bg)", borderColor: "var(--accent)", boxShadow: `0 0 20px var(--accent)` }} />
      </div>
    </div>
  );
}
