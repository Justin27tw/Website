import { useState, useEffect } from "react";

type Page = "home" | "about" | "portfolio" | "contact";

interface Props {
  current: Page;
  onNavigate: (p: Page) => void;
}

export function Navbar({ current, onNavigate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);

    const updateTime = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);

    return () => {
      window.removeEventListener("scroll", handler);
      clearInterval(timer);
    };
  }, []);

  const links: { id: Page; label: string; en: string }[] = [
    { id: "home", label: "首頁", en: "01 / HOME" },
    { id: "about", label: "關於我", en: "02 / ABOUT" },
    { id: "portfolio", label: "作品集", en: "03 / WORK" },
    { id: "contact", label: "聯絡我", en: "04 / CONTACT" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 md:px-6 transition-all duration-700 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-700 ${
            scrolled ? "glass-strong shadow-2xl" : ""
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-white text-sm animate-gradient"
                   style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2), var(--accent-3))" }}>
                JL
              </div>
              <div className="absolute inset-0 rounded-xl opacity-50 blur-xl -z-10 group-hover:opacity-80 transition-opacity"
                   style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }} />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-sm tracking-wider">JAY LIN</div>
              <div className="text-[10px] tracking-widest" style={{ color: "var(--muted)" }}>CREATIVE DEVELOPER</div>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => onNavigate(l.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  current === l.id ? "text-white" : ""
                }`}
                style={current === l.id ? {} : { color: "var(--muted)" }}
              >
                {current === l.id && (
                  <span className="absolute inset-0 rounded-xl animate-gradient"
                        style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }} />
                )}
                <span className="relative flex items-center gap-2">
                  <span className="text-[10px] font-display tracking-wider opacity-60">{l.en.split(" / ")[0]}</span>
                  {l.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs font-display" style={{ color: "var(--muted)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: "var(--accent)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: "var(--accent)" }} />
              </span>
              <span>台北 · {time}</span>
            </div>

            <button
              onClick={() => onNavigate("contact")}
              className="hidden sm:flex btn-primary px-4 py-2 rounded-xl text-sm font-bold items-center gap-2"
            >
              <span>開始合作</span>
            </button>

            <button
              className="lg:hidden p-2 rounded-xl glass"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="選單"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden glass-strong mt-3 rounded-2xl p-3 animate-scale-in">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  onNavigate(l.id);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-colors ${
                  current === l.id ? "bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs font-display" style={{ color: "var(--accent)" }}>{l.en.split(" / ")[0]}</span>
                  <span className="font-bold">{l.label}</span>
                </span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>{l.en.split(" / ")[1]}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
