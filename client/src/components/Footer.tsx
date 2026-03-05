/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Footer: Contact section with botanical styling, dark ink background
 */
import { motion } from "framer-motion";
import { Leaf, Mail, Github, Linkedin, ArrowUp } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-8 lg:pt-24 lg:pb-10 bg-ink text-parchment overflow-hidden">
      {/* Decorative botanical watermark */}
      <div className="absolute top-8 right-8 opacity-[0.03] pointer-events-none select-none">
        <Leaf className="w-64 h-64 text-emerald-light" />
      </div>

      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 48" className="w-full h-10 lg:h-12" preserveAspectRatio="none">
          <path
            d="M0,48 L0,24 C240,8 480,0 720,16 C960,32 1200,8 1440,24 L1440,48 Z"
            fill="oklch(0.280 0.030 160)"
          />
        </svg>
      </div>

      <div ref={ref as React.RefObject<HTMLDivElement>} className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-emerald-light" />
              <span
                className="text-xl tracking-wide"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.940 0.025 163)" }}
              >
                Digital Garden
              </span>
            </div>
            <p
              className="text-sm leading-relaxed opacity-60 max-w-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              AI 产品经理的数字花园，记录产品思考、技术探索与创意实践的每一步成长。
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4
              className="text-sm uppercase tracking-widest mb-5 opacity-40"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Catalogue
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                { label: "实践项目", href: "#projects" },
                { label: "技能图谱", href: "#skills" },
                { label: "AIGC 作品", href: "#aigc" },
                { label: "策划案", href: "#plans" },
                { label: "新闻作品", href: "#news" },
                { label: "文学作品", href: "#literary" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-50 hover:opacity-100 hover:text-emerald-light transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="text-sm uppercase tracking-widest mb-5 opacity-40"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 hover:text-emerald-light transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                hello@example.com
              </a>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="#"
                  className="p-2.5 rounded-sm border border-white/8 opacity-50 hover:opacity-100 hover:border-emerald-light/30 hover:text-emerald-light hover:bg-emerald-light/5 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-sm border border-white/8 opacity-50 hover:opacity-100 hover:border-emerald-light/30 hover:text-emerald-light hover:bg-emerald-light/5 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-30" style={{ fontFamily: "var(--font-accent)" }}>
            Cultivated with care. All specimens documented.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs opacity-30">
              &copy; {new Date().getFullYear()} Digital Garden. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm border border-white/8 opacity-30 hover:opacity-80 hover:border-emerald-light/30 hover:text-emerald-light transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
