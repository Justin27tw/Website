import { useEffect, useState } from "react";

type Theme = "aurora" | "sunset" | "ocean" | "meadow" | "light";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "aurora";
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themes = [
    { id: "aurora" as Theme, name: "極光紫", gradient: "from-violet-400 via-fuchsia-400 to-pink-400" },
    { id: "sunset" as Theme, name: "暮光紅", gradient: "from-orange-400 via-rose-400 to-red-400" },
    { id: "ocean" as Theme, name: "深海藍", gradient: "from-cyan-400 via-sky-400 to-blue-500" },
    { id: "meadow" as Theme, name: "森林綠", gradient: "from-emerald-400 via-teal-400 to-lime-400" },
    { id: "light" as Theme, name: "拂曉白", gradient: "from-slate-200 via-white to-slate-100" },
  ];

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {open && (
        <div className="absolute right-16 bottom-0 glass-strong rounded-3xl p-4 w-60 animate-scale-in shadow-2xl">
          <div className="text-[10px] mb-3 font-display tracking-widest uppercase flex items-center gap-2" style={{ color: "var(--muted)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
            選擇主題風格
          </div>
          <div className="flex flex-col gap-1.5">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setTimeout(() => setOpen(false), 200);
                }}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition-all hover:scale-[1.02] ${
                  theme === t.id ? "bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <span className={`relative w-8 h-8 rounded-full bg-gradient-to-br ${t.gradient} shadow-lg`}>
                  {theme === t.id && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-white/50 animate-pulse" />
                  )}
                </span>
                <span className="font-bold">{t.name}</span>
                {theme === t.id && (
                  <svg className="ml-auto" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--accent)" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t text-[10px] text-center" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
            設定會自動儲存 ✨
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="relative glass-strong flex h-14 w-14 items-center justify-center rounded-2xl hover:scale-110 transition-transform shadow-2xl group"
        aria-label="主題切換"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-gradient"
             style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }} />
        <svg className="relative animate-spin-slow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </button>
    </div>
  );
}
