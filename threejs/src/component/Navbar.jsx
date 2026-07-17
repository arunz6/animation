import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <nav
        className={`flex items-center gap-1 rounded-full border border-white/10 bg-black/80 backdrop-blur-md px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.5)]" : ""
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
  );
}