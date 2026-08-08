import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "footer", label: "Footer" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const shadowClass = scrolled
    ? "shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
    : "";

  return (
    <>
      {/* =====================================
          DESKTOP / TABLET — original pill nav
          Hidden below sm, shown from sm: up
      ===================================== */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-center pt-5 px-4">
        <nav
          className={`flex items-center gap-1 rounded-full border border-white/10 bg-black/80 backdrop-blur-md px-2 py-2 transition-shadow duration-300 ${
            scrolled
              ? "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.5)]"
              : ""
          }`}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                active === link.id
                  ? "text-black bg-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      {/* =====================================
          PHONE — full-width rectangular header,
          no rounded corners, hamburger on the
          right. Dropdown panel expands below it,
          same full width.
      ===================================== */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-50">
        {/* Top bar */}
        <div
          className={`flex items-center justify-between h-16 px-4 bg-black/90 backdrop-blur-md border-b border-white/10 transition-shadow duration-300 ${shadowClass}`}
        >
          <span className="text-sm font-medium text-white/70 capitalize">
            {links.find((l) => l.id === active)?.label ?? "Menu"}
          </span>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="flex items-center justify-center w-10 h-10 rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Dropdown panel — same full width as the bar above it */}
        <div
          className={`overflow-hidden bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-out ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col p-3 gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`w-full text-left px-4 py-3 text-sm font-medium tracking-wide rounded-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                  active === link.id
                    ? "text-black bg-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}