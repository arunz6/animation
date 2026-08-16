import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleContact = () => {
    const el = document.getElementById("footer");

    if (el) {
      gsap.to(window, {
        duration: 2.5,
        scrollTo: {
          y: el,
        },
        ease: "power2.inOut",
      });
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5">
      <nav
        className={`fixed top-0 left-0 z-50 items-center justify-between flex w-screen rounded-none border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md md:left-1/2 md:-translate-x-1/2 md:max-w-5xl md:rounded-full md:px-5 md:py-3
    transition-all duration-300
    ${
      scrolled
        ? "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.5)]"
        : ""
    }
  `}
      >
        {/* Portfolio Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-medium tracking-wide text-white"
        >
          Arun Rajput
        </button>

        {/* Contact */}
        <button
          onClick={handleContact}
          className="rounded-full bg-white px-5 py-2 text-sm font-medium tracking-wide text-black transition-all duration-300 hover:bg-white/80"
        >
          Contact Me
        </button>
      </nav>
    </div>
  );
}
