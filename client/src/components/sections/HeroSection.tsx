/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Hero: Premium identity card with floating particles, gradient text, and glass cards
 */
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Trophy, Zap, Rocket } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388655616/RrYG8C9a646Dp8KkPTUPxA/hero-botanical-6nEVK2FiwtZabDMkB3n8Hy.webp";
const PROFILE_FRAME = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388655616/RrYG8C9a646Dp8KkPTUPxA/profile-botanical-frame-czdDSWht92kATTxrC6bbUy.webp";

// 替换为你的真实照片路径：client/public/images/your-photo.jpg
const PROFILE_PHOTO = "/images/profile.jpg";

const highlights = [
  {
    icon: Trophy,
    value: "6战6奖",
    label: "AI 黑客松全胜",
    detail: "抖音AI创变者队长 · A2A · AINX · 南客松 · 影石 · 创新大赛",
    accent: "oklch(0.596 0.145 163.225)",
  },
  {
    icon: Zap,
    value: "AI Agent",
    label: "规模化落地",
    detail: "携程场景覆盖 +361% · Ad Strength +14.7ppt",
    accent: "oklch(0.700 0.130 85)",
  },
  {
    icon: Rocket,
    value: "独立闭环",
    label: "0→1 产品交付",
    detail: "需求→PRD→Figma→上线 · 对标全职 PM",
    accent: "oklch(0.432 0.120 163.225)",
  },
];

const tools = [
  "Codex CLI", "Cursor", "Trae", "OpenCode",
  "Coze", "Dify", "Python", "SQL", "Figma",
];

const hackathons = [
  "🥈 抖音AI创变者 二等奖（队长）",
  "🏅 全球A2A黑客松 知乎特别奖",
  "🥈 浦软AINX 二等奖（AI陪伴机器人）",
  "🥈 南客松 银奖（数字幻窗AI硬件）",
  "🏅 影石 ThinkBoard 奖",
  "🥈 中国国际大学生创新大赛 校赛二等奖",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Floating particles background — now handled globally by Home.tsx */}

      {/* Background botanical illustration */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-[oklch(0.975_0.008_85/0.6)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text content — left side */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Identity badge */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-emerald/8 border border-emerald/15 rounded-full
                  hover:bg-emerald/12 hover:border-emerald/25 hover:shadow-[0_4px_12px_oklch(0.596_0.145_163.225/0.15)] transition-all duration-300"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald" />
                <span
                  className="text-sm text-emerald-dark font-medium tracking-wide"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  AI Builder @ WaytoAGI
                </span>
              </motion.div>

              {/* Name — gradient text */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-4 gradient-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                黄莹
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-base lg:text-lg text-ink/55 mb-8 max-w-md"
                style={{ fontFamily: "var(--font-body)" }}
              >
                让算法有温度，让产品有灵气
              </motion.p>

              {/* Highlight cards — glass morphism */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
              >
                {highlights.map((item, i) => (
                  <div
                    key={item.label}
                    className="stat-card rounded-sm p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: item.accent }}
                      />
                      <span
                        className="text-lg font-medium text-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.value}
                      </span>
                    </div>
                    <p
                      className="text-xs text-ink/70 font-medium mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-[11px] text-ink/40 leading-snug"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.detail}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-6"
              >
                <p
                  className="text-[11px] text-ink/30 uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  AI Coding Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool, i) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.55 + i * 0.04 }}
                      className="hero-tag px-2.5 py-1 text-xs font-medium text-emerald-dark rounded-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Hackathon awards */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-8"
              >
                <p
                  className="text-[11px] text-ink/30 uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  6 战 6 奖 · AI 黑客松全记录
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {hackathons.map((h, i) => (
                    <motion.span
                      key={h}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.65 + i * 0.05 }}
                      className="text-xs text-ink/50 hover:text-emerald-dark transition-colors cursor-default"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {h}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-4"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white text-sm font-medium rounded-sm
                    hover:bg-emerald-dark transition-all duration-300
                    shadow-[0_2px_8px_oklch(0.596_0.145_163.225/0.3)]
                    hover:shadow-[0_8px_24px_oklch(0.596_0.145_163.225/0.4)]
                    hover:-translate-y-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  浏览作品集
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="mailto:huangying@smail.nju.edu.cn"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-dark
                    border border-emerald/30 rounded-sm
                    hover:bg-emerald/5 hover:border-emerald/50
                    transition-all duration-300 hover:-translate-y-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  huangying@smail.nju.edu.cn
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile photo area — right side */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px]"
            >
              {/* Botanical frame overlay */}
              <img
                src={PROFILE_FRAME}
                alt=""
                className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
              />
              {/* Profile photo */}
              <div className="absolute inset-[10%] rounded-full overflow-hidden bg-emerald/5 flex items-center justify-center">
                <img
                  src={PROFILE_PHOTO}
                  alt="黄莹"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add("flex", "items-center", "justify-center");
                      const placeholder = document.createElement("div");
                      placeholder.className = "text-center";
                      placeholder.innerHTML = `
                        <div class="w-20 h-20 mx-auto mb-3 rounded-full bg-emerald/12 flex items-center justify-center border border-emerald/15">
                          <span class="text-2xl text-emerald-dark" style="font-family: var(--font-display)">黄莹</span>
                        </div>
                        <p class="text-xs text-emerald-dark/50" style="font-family: var(--font-accent)">将照片放在 public/images/profile.jpg</p>
                      `;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs text-ink/30 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-emerald/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}