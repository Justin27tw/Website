import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";

type Page = "home" | "about" | "portfolio" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [animKey, setAnimKey] = useState(0);

  const navigate = (p: Page) => {
    if (p === page) return;
    setPage(p);
    setAnimKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Handle initial hash routing
    const hash = window.location.hash.replace("#", "") as Page;
    if (["home", "about", "portfolio", "contact"].includes(hash)) {
      setPage(hash);
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Noise overlay */}
      <div className="noise" />

      <Navbar current={page} onNavigate={navigate} />
      <ThemeSwitcher />

      <main key={animKey} className="relative z-10 animate-fade-in">
        {page === "home" && <Home onNavigate={navigate} />}
        {page === "about" && <About />}
        {page === "portfolio" && <Portfolio />}
        {page === "contact" && <Contact />}
      </main>
    </div>
  );
}
