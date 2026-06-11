import { useEffect, useRef, useState } from "react";
import { useTypewriter } from "../hooks";
import { profile, roles, stats } from "../config";

interface Props {
  onNavigate: (p: "home" | "about" | "portfolio" | "contact") => void;
}

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1800;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export function Hero({ onNavigate }: Props) {
  const typed = useTypewriter(roles, 100, 1500);
  const mouseRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      ref={mouseRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Aurora animated background */}
      <div className="aurora-bg" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
        }}
      />

      {/* Floating glow orbs with parallax */}
      <div
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full animate-glow pointer-events-none"
        style={{
          background: "var(--accent)",
          transform: `translate(${mouse.x * 40}px, ${mouse.y * 40}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[700px] h-[700px] rounded-full animate-glow pointer-events-none"
        style={{
          background: "var(--accent-2)",
          animationDelay: "2s",
          transform: `translate(${mouse.x * -60}px, ${mouse.y * -60}px)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-glow pointer-events-none opacity-40"
        style={{
          background: "var(--accent-3)",
          animationDelay: "4s",
        }}
      />

      {/* Rotating concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
        <div className="relative w-[800px] h-[800px] max-w-[95vw] max-h-[95vw]">
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 800 800" fill="none">
            <defs>
              <linearGradient id="ring-g1" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="var(--accent-2)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="400" r="390" stroke="url(#ring-g1)" strokeWidth="1" strokeDasharray="2 10" />
            <circle cx="400" cy="400" r="350" stroke="url(#ring-g1)" strokeWidth="1" strokeDasharray="4 20" />
          </svg>
          <svg className="absolute inset-0 w-full h-full animate-spin-reverse" viewBox="0 0 800 800" fill="none">
            <circle cx="400" cy="400" r="310" stroke="var(--accent-2)" strokeWidth="0.5" strokeDasharray="1 8" opacity="0.4" />
            <circle cx="400" cy="400" r="260" stroke="var(--accent-3)" strokeWidth="0.5" strokeDasharray="3 15" opacity="0.3" />
          </svg>
          {/* Orbiting dots */}
          {[0, 72, 144, 216, 288].map((deg, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full animate-spin-slow"
              style={{
                background: i % 2 ? "var(--accent-2)" : "var(--accent)",
                boxShadow: `0 0 20px ${i % 2 ? "var(--accent-2)" : "var(--accent)"}`,
                transform: `rotate(${deg}deg) translateX(200px)`,
                transformOrigin: "0 0",
                animationDuration: `${20 + i * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float pointer-events-none"
          style={{
            left: `${(i * 47) % 100}%`,
            top: `${(i * 23) % 100}%`,
            width: `${3 + (i % 4) * 2}px`,
            height: `${3 + (i % 4) * 2}px`,
            background: i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--accent-2)" : "var(--accent-3)",
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${5 + (i % 5)}s`,
            boxShadow: `0 0 ${10 + (i % 5) * 3}px currentColor`,
            color: i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--accent-2)" : "var(--accent-3)",
            opacity: 0.7,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-5xl">
          {/* Top badge */}
          <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in">
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-xs font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: "var(--accent)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: "var(--accent)" }} />
              </span>
              <span style={{ color: "var(--accent)" }}>開放接案中</span>
            </div>
            <div className="glass rounded-full px-4 py-2 text-xs font-display tracking-widest" style={{ color: "var(--muted)" }}>
              AVAILABLE FOR 2025
            </div>
          </div>

          <p className="font-display text-xs md:text-sm tracking-[0.4em] mb-6 animate-slide-up"
             style={{ color: "var(--muted)" }}>
            ◈ HELLO, WORLD — I AM
          </p>

          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] mb-8">
            <span className="block animate-slide-up delay-200">
              <span className="inline-block animate-wave" style={{ transformOrigin: "70% 70%" }}>你</span>
              <span>好，我是</span>
            </span>
            <span className="block gradient-text text-glow animate-slide-up delay-300 mt-2">
              {profile.name}
            </span>
            <span className="block font-display font-black text-3xl md:text-5xl lg:text-6xl mt-4 animate-slide-up delay-400"
                  style={{ color: "var(--muted)" }}>
              {profile.englishName}
            </span>
          </h1>

          {/* Typewriter */}
          <div className="flex flex-wrap items-center gap-3 text-xl md:text-3xl font-bold mb-10 animate-slide-up delay-500">
            <span style={{ color: "var(--muted)" }}>我是一位</span>
            <span className="relative inline-flex items-center">
              <span className="gradient-text">{typed}</span>
              <span className="inline-block w-1 h-8 md:h-10 ml-1 animate-blink"
                    style={{ background: "linear-gradient(180deg, var(--accent), var(--accent-2))" }} />
            </span>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg max-w-2xl mb-12 leading-relaxed animate-slide-up delay-700"
             style={{ color: "var(--muted)" }}>
            {profile.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-20 animate-slide-up delay-900">
            <button
              onClick={() => onNavigate("portfolio")}
              className="btn-primary px-8 py-4 rounded-2xl font-bold text-sm flex items-center gap-3 group"
            >
              <span>探索作品集</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                   className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="btn-outline px-8 py-4 rounded-2xl font-bold text-sm flex items-center gap-3 group"
            >
              <span>聯絡我</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl animate-slide-up delay-1100">
            {stats.map((s, i) => (
              <div key={s.label}
                   className="glass rounded-2xl p-5 md:p-6 hover:scale-105 transition-transform duration-500 group cursor-default relative overflow-hidden"
                   style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 15%, transparent), transparent 70%)" }} />
                <div className="relative">
                  <div className="metric-num text-4xl md:text-5xl mb-2">
                    <Counter target={parseInt(s.value)} suffix={s.value.includes("+") ? "+" : ""} />
                  </div>
                  <div className="text-sm font-bold mb-1">{s.label}</div>
                  <div className="text-[10px] font-display tracking-widest" style={{ color: "var(--muted)" }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in delay-1100">
        <span className="text-[10px] font-display tracking-[0.3em]" style={{ color: "var(--muted)" }}>SCROLL DOWN</span>
        <div className="relative w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5"
             style={{ borderColor: "var(--border-strong)" }}>
          <div className="w-1 h-2 rounded-full animate-float"
               style={{ background: "linear-gradient(180deg, var(--accent), var(--accent-2))" }} />
        </div>
      </div>
    </section>
  );
}
