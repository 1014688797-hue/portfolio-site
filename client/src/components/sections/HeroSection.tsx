/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Hero: Narrative-style hero with literary long-form intro
 * Background is light botanical illustration → use DARK text
 * Layout: Full-width narrative scroll with botanical frame photo on the side
 */
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388655616/RrYG8C9a646Dp8KkPTUPxA/hero-botanical-6nEVK2FiwtZabDMkB3n8Hy.webp";
const PROFILE_FRAME = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388655616/RrYG8C9a646Dp8KkPTUPxA/profile-botanical-frame-czdDSWht92kATTxrC6bbUy.webp";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background botanical illustration */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-[oklch(0.975_0.008_85/0.55)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Text content — left side */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Specimen label */}
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-4 h-4 text-emerald" />
                <span className="specimen-label text-sm text-emerald-dark tracking-widest uppercase">
                  Coder · Storyteller · Bridge Builder
                </span>
                <div className="botanical-divider flex-1 max-w-[80px]" />
              </div>

              {/* Opening line — poetic identity */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.2] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-emerald">仙人绿云</span>，庄周梦蝶，
                <br />
                飞鸿踏雪，<span className="text-ink/50">叙事者也。</span>
              </h1>

              {/* Narrative paragraphs */}
              <div className="space-y-4 mb-8 max-w-xl">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-sm lg:text-[15px] text-ink/60 leading-[1.9]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  3500多年前，夏朝晚期的一位匠人在甲骨上刻下第一个字。那一刻，世界被编码，时间被铭写。他是第一位 coder。
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="text-sm lg:text-[15px] text-ink/60 leading-[1.9]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  从甲骨到金石，从简牍到缣帛，从纸张到屏幕——人类从未停止 coding。我们在龟甲上 coding 占卜，在竹简上 coding 礼乐，在纸张上 coding 诗史，在字节间 coding 万物。
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm lg:text-[15px] text-ink/55 leading-[1.9] italic"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  每一次媒介的迁徙，都是一次文明的转身。
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-sm lg:text-[15px] text-ink/60 leading-[1.9]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  曾经，文字是"人心"的镜像，代码是"数理"的化身。如今，它们都成为 AI 的母语。
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-sm lg:text-[15px] text-ink/60 leading-[1.9]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  从14岁成为省少年作家，到用诗歌与古文丈量世界；从新闻与传播的田野，到 AI 黑客松的日夜兼程——我始终在寻找同一种东西：<strong className="text-ink/80 font-medium">如何用新的语言，讲好旧的故事。</strong>
                </motion.p>

                {/* Signature quote */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="pt-2"
                >
                  <p
                    className="text-base lg:text-lg text-emerald-dark/80 font-medium tracking-wide"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    "Coding or talking — it's all the same."
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm lg:text-[15px] text-ink/55 leading-[1.9]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  我希望自己能成为一座桥——让算法有温度，让产品有灵气，让故事在数字时代，仍能照见人心。
                </motion.p>
              </div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {["AI 产品经理", "省少年作家", "AIGC 创作", "新闻与传播", "诗歌与古文", "黑客松"].map(
                  (tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 + i * 0.06 }}
                      className="px-3 py-1.5 text-xs font-medium text-emerald-dark bg-emerald/8 border border-emerald/15 rounded-sm hover:bg-emerald/12 hover:border-emerald/25 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {tag}
                    </motion.span>
                  )
                )}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-center gap-4"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white text-sm font-medium rounded-sm hover:bg-emerald-dark transition-all duration-300 shadow-[0_2px_8px_oklch(0.596_0.145_163.225/0.3)] hover:shadow-[0_4px_16px_oklch(0.596_0.145_163.225/0.4)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  浏览作品集
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-dark border border-emerald/30 rounded-sm hover:bg-emerald/5 hover:border-emerald/50 transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  联系我
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile photo area — right side */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px]"
            >
              {/* Botanical frame */}
              <img
                src={PROFILE_FRAME}
                alt="Botanical frame"
                className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
              />
              {/* Profile photo placeholder */}
              <div className="absolute inset-[12%] rounded-full overflow-hidden bg-emerald/8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-emerald/12 flex items-center justify-center border border-emerald/15">
                    <span className="text-2xl text-emerald-dark" style={{ fontFamily: "var(--font-display)" }}>
                      绿云
                    </span>
                  </div>
                  <p className="text-xs text-emerald-dark/50" style={{ fontFamily: "var(--font-accent)" }}>
                    Your Photo Here
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-ink/30 tracking-widest uppercase" style={{ fontFamily: "var(--font-accent)" }}>
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
