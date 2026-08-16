import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Download, Send, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Footer = () => {
  const containerRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useGSAP(() => {
    const els = containerRef.current.querySelectorAll(".reveal");

    gsap.from(els, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // No backend/form-service wired up yet, so this opens the user's
    // email client with the message pre-filled. Swap this for Formspree /
    // EmailJS / a real API route whenever you add one.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:arunrajput88176894@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

 

  const scrollToTop = () => {
  document.getElementById("home")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


  return (
    <div id="footer" className="relative z-10 w-screen bg-black/40 text-white">
      <div
        ref={containerRef}
        className="w-full max-w-5xl mx-auto px-6 sm:px-10 py-20 flex flex-col gap-16"
      >
        {/* Section Tag */}
        <div className="reveal">
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-wider text-white">
            Let's Connect
          </h2>
        </div>

        {/* Intro */}
        <div className="reveal max-w-3xl">
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Open to SDE / Full-Stack internship and full-time roles. Whether
            it's an opportunity, a project, or just a technical chat — my inbox
            is open.
          </p>
        </div>

        {/* Info + Form Row */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-14 border-t border-white/10 pt-10">
          {/* LEFT — Contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3">
                Email
              </p>
              <a
                href="mailto:arunrajput88176894@gmail.com"
                className="text-white font-medium hover:text-gray-400 transition-colors"
              >
                arunrajput88176894@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/arun-rajput-592a68373/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-gray-400 transition-colors"
              >
                linkedin.com/in/arun-rajput
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3">
                GitHub
              </p>
              <a
                href="https://github.com/arunz6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-gray-400 transition-colors"
              >
                github.com/arunz6
              </a>
            </div>

            <a
              href="/Arun_Rajput_Resume_Detailed.docx"
              download="Arun_Rajput_Resume_Detailed.docx"
              className="w-fit flex items-center gap-2 mt-2 px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] text-[10px] tracking-[0.15em] uppercase text-white/70 hover:bg-white hover:text-black transition-all duration-300"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>

          {/* RIGHT — Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="text-gray-500 text-xs uppercase tracking-[0.2em] block mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/15 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-gray-500 text-xs uppercase tracking-[0.2em] block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-white/15 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-gray-500 text-xs uppercase tracking-[0.2em] block mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full bg-transparent border-b border-white/15 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-fit flex items-center gap-2 mt-2 px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] text-[10px] tracking-[0.15em] uppercase text-white/70 hover:bg-white hover:text-black transition-all duration-300"
            >
              <Send size={14} />
              {sent ? "Opening Mail App..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-gray-500 text-xs tracking-wide">
            © {new Date().getFullYear()} Arun Rajput. Built with React, Three.js
            &amp; GSAP.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
