import { useRef } from "react";
import { Hero } from "../components/Hero";
import { useReveal } from "../hooks";
import { services, testimonials, marqueeWords, profile } from "../config";

interface Props {
  onNavigate: (p: "home" | "about" | "portfolio" | "contact") => void;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// Magnetic hover card
function MagneticCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <div ref={ref} onMouseMove={handleMove} className={`magnetic-border ${className}`}>
      {children}
    </div>
  );
}

export function Home({ onNavigate }: Props) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />

      {/* Marquee */}
      <section className="py-8 border-y overflow-hidden" style={{ borderColor: "var(--border)" }}>
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, k) => (
            <div key={k} className="flex items-center gap-8 px-4 font-display font-black text-5xl md:text-7xl">
              {marqueeWords.map((t, i) => (
                <span key={i} className={i % 2 === 0 ? "gradient-text" : "opacity-40"}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="aurora-bg opacity-60" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <span className="section-label">WHAT I DO</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-tight mb-4">
                我<span className="gradient-text">擅長的事</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
                從構想到上線，提供一站式的數位產品服務
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <MagneticCard>
                  <div className="card rounded-3xl p-8 md:p-10 h-full group relative overflow-hidden">
                    {/* Big number */}
                    <div className="absolute top-6 right-8 font-display font-black text-7xl md:text-8xl opacity-5 pointer-events-none">
                      0{i + 1}
                    </div>

                    <div className="relative">
                      <div className="text-5xl mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                           style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 20%, transparent), color-mix(in srgb, var(--accent-2) 20%, transparent))" }}>
                        {s.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black mb-4">{s.title}</h3>
                      <p className="mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.highlights.map((h) => (
                          <span key={h} className="chip text-xs font-bold px-3 py-1.5 rounded-full">{h}</span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                         style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3))" }} />
                  </div>
                </MagneticCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-20">
              <span className="section-label mb-6 inline-block">WORK PROCESS</span>
              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                我的<span className="gradient-text">工作流程</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              { step: "01", title: "探索與構想", desc: "深度溝通需求、目標受眾與品牌定位，奠定專案方向。", icon: "💡" },
              { step: "02", title: "設計與規劃", desc: "建立資訊架構、視覺風格與互動原型，反覆驗證與優化。", icon: "🎨" },
              { step: "03", title: "開發與實作", desc: "運用現代化技術堆疊，打造高效能、可擴充的產品。", icon: "⚡" },
              { step: "04", title: "上線與優化", desc: "協助部署、數據追蹤與持續優化，陪你走更長遠的路。", icon: "🚀" },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 120}>
                <div className="card rounded-3xl p-8 h-full group relative">
                  <div className="font-display text-6xl font-black gradient-text mb-6">{p.step}</div>
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="text-xl font-black mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="aurora-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <span className="section-label mb-6 inline-block">TESTIMONIALS</span>
              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                客戶<span className="gradient-text">真心話</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="card rounded-3xl p-8 h-full flex flex-col">
                  <div className="text-5xl font-black mb-4 gradient-text">"</div>
                  <p className="leading-relaxed mb-8 flex-1" style={{ color: "var(--muted)" }}>{t.content}</p>
                  <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-white"
                         style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-xs" style={{ color: "var(--muted)" }}>{t.title}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center group">
              {/* animated gradient bg */}
              <div className="absolute inset-0 animate-gradient"
                   style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 50%, var(--accent-3) 100%)", backgroundSize: "300% 300%" }} />
              <div className="absolute inset-0 opacity-30"
                   style={{
                     backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)",
                   }} />

              <div className="relative">
                <div className="text-xs font-display tracking-[0.4em] text-white/80 mb-6">LET'S CREATE SOMETHING AMAZING</div>
                <h2 className="text-white text-5xl md:text-7xl font-black leading-tight mb-8">
                  準備好開始<br />你的下一個專案了嗎？
                </h2>
                <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">
                  不論是品牌網站、Web App 或數位產品體驗，我都能協助你將想法化為現實。
                </p>
                <button
                  onClick={() => onNavigate("contact")}
                  className="bg-white text-black font-black px-8 py-4 rounded-2xl text-sm flex items-center gap-3 mx-auto hover:scale-105 transition-transform shadow-2xl"
                >
                  <span>開始合作</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="py-12 px-6 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: "var(--muted)" }}>
          <div className="font-display font-bold tracking-wider">© 2025 {profile.name}. CRAFTED WITH ✨</div>
          <div className="flex items-center gap-6">
            <span>Designed & Developed by Jay</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
