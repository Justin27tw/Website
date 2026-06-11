import { useState } from "react";
import { useReveal } from "../hooks";
import { profile, socials } from "../config";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3500);
  };

  return (
    <div className="pt-32 pb-32 px-6 relative overflow-hidden">
      <div className="aurora-bg opacity-60" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="section-label mb-6 inline-block">GET IN TOUCH</span>
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              一起<span className="gradient-text">合作</span>
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
              有新的專案想法、合作機會或只是想說聲嗨？我都很期待收到你的訊息。
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal delay={100}>
              <a href={`mailto:${profile.email}`} className="card rounded-3xl p-8 block group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                     style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="text-xs font-display tracking-widest mb-2" style={{ color: "var(--muted)" }}>EMAIL</div>
                <div className="text-xl font-black mb-2">{profile.email}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>點擊這裡直接寄信 →</div>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <div className="card rounded-3xl p-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                     style={{ background: "linear-gradient(135deg, var(--accent-2), var(--accent-3))" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-xs font-display tracking-widest mb-2" style={{ color: "var(--muted)" }}>LOCATION</div>
                <div className="text-xl font-black mb-2">{profile.location}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>GMT+8 · 遠端工作</div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="card rounded-3xl p-8">
                <div className="text-xs font-display tracking-widest mb-4" style={{ color: "var(--muted)" }}>AVAILABILITY</div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                          style={{ background: "var(--accent)" }} />
                    <span className="relative inline-flex rounded-full h-3 w-3"
                          style={{ background: "var(--accent)" }} />
                  </span>
                  <span className="font-black text-lg">目前開放接案中</span>
                </div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>平均回覆時間：24 小時內</div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="card rounded-3xl p-8">
                <div className="text-xs font-display tracking-widest mb-4" style={{ color: "var(--muted)" }}>FOLLOW ME</div>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                       className="w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform card" aria-label={s.name}>
                      <SocialIcon name={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal className="lg:col-span-3" delay={200}>
            <form onSubmit={submit} className="card rounded-[2.5rem] p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="section-label">SEND A MESSAGE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black">告訴我你的想法 ✨</h2>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="你的名字">
                  <input required placeholder="王小明" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                         className="w-full rounded-2xl px-5 py-4 outline-none transition-all focus:scale-[1.01] text-base"
                         style={{ background: "color-mix(in srgb, var(--bg-3) 70%, transparent)", border: "1px solid var(--border)", color: "var(--text)" }} />
                </Field>
                <Field label="Email">
                  <input required type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                         className="w-full rounded-2xl px-5 py-4 outline-none transition-all focus:scale-[1.01] text-base"
                         style={{ background: "color-mix(in srgb, var(--bg-3) 70%, transparent)", border: "1px solid var(--border)", color: "var(--text)" }} />
                </Field>
              </div>

              <Field label="主題">
                <input placeholder="專案合作 / 問題回報 / 其他" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                       className="w-full rounded-2xl px-5 py-4 outline-none transition-all focus:scale-[1.01] text-base"
                       style={{ background: "color-mix(in srgb, var(--bg-3) 70%, transparent)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </Field>

              <div>
                <label className="text-xs font-display tracking-widest mb-2 block" style={{ color: "var(--muted)" }}>訊息內容</label>
                <textarea
                  required rows={7} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-2xl px-5 py-4 outline-none transition-all focus:scale-[1.01] resize-none"
                  style={{
                    background: "color-mix(in srgb, var(--bg-3) 70%, transparent)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  placeholder="告訴我更多細節，例如：專案類型、預算、時程...等"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="btn-primary w-full py-5 rounded-2xl font-black text-base flex items-center justify-center gap-3 disabled:opacity-80"
              >
                {sent ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    已送出！感謝你的聯繫
                  </>
                ) : (
                  <>
                    <span>送出訊息</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              {sent && (
                <div className="text-center text-sm" style={{ color: "var(--accent)" }}>
                  我會在 24 小時內回覆你 💌
                </div>
              )}
            </form>
          </Reveal>
        </div>

        {/* FAQ */}
        <Reveal>
          <div className="mt-24">
            <div className="text-center mb-10">
              <span className="section-label mb-6 inline-block">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black">常見<span className="gradient-text">問題</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                { q: "接案類型有哪些？", a: "主要提供網站開發、Web App、品牌識別與數位產品設計。" },
                { q: "一個專案大約需要多久？", a: "視規模而定，一般網站約 3-6 週，大型專案 2-4 個月。" },
                { q: "可以遠端合作嗎？", a: "可以！我習慣遠端工作，與全球客戶合作無礙。" },
                { q: "如何收費方式？", a: "依專案規模與時程評估，提供固定報價與分期付款。" },
              ].map((f, i) => (
                <div key={i} className="card rounded-2xl p-6">
                  <div className="font-black text-lg mb-2">Q. {f.q}</div>
                  <div className="text-sm" style={{ color: "var(--muted)" }}>{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-display tracking-widest mb-2 block" style={{ color: "var(--muted)" }}>{label}</label>
      <div>{children}</div>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor" as const };
  if (name === "github")
    return (
      <svg {...common}>
        <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg {...common}>
        <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1zM5.1 7.4c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1zm1.8 13H3.3V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4c0 1 .8 1.8 1.8 1.8h20.4c1 0 1.8-.8 1.8-1.8V1.8c0-1-.8-1.8-1.8-1.8z" />
      </svg>
    );
  if (name === "twitter")
    return (
      <svg {...common}>
        <path d="M18.2 2H21l-6.5 7.5L22.5 22h-6.9l-5.4-7-6.2 7H1.2l7-8L0 2h7l4.9 6.5L18.2 2zm-1.2 18h2L5.9 4H3.8l13.2 16z" />
      </svg>
    );
  if (name === "dribbble")
    return (
      <svg {...common}>
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.7 0 12 0zm7.9 5.5c1.4 1.7 2.2 3.9 2.3 6.2-.3-.1-3.4-.7-6.5-.3-.1-.2-.1-.4-.2-.6-.2-.5-.4-.9-.6-1.4 3.5-1.4 5-3.5 5-3.9zm-2-1.5c-.1.2-1.5 2.3-4.9 3.5-1.6-2.9-3.3-5.2-3.6-5.6 3.4-.8 6.9.4 8.5 2.1zM9.9 2.7c.3.4 2 2.8 3.5 5.6-4.5 1.2-8.4 1.2-8.8 1.2.6-2.9 2.7-5.4 5.3-6.8zM2.4 12v-.3c.4 0 5 .1 9.7-1.4.3.6.5 1.1.8 1.7-4.6 1.3-7.3 5.3-7.6 5.9-1.8-2-2.9-4.7-2.9-5.9zm4.3 7c.2-.4 2.3-4.3 7.2-5.8 1.5 3.8 2.1 7 2.2 7.9-3 1.3-6.4.8-9.4-2.1zm11.4 1.2c-.1-.8-.7-3.9-2.1-7.6 3-.5 5.5.3 5.8.4-.5 2.4-1.9 4.5-3.7 7.2z" />
      </svg>
    );
  return <span />;
}
