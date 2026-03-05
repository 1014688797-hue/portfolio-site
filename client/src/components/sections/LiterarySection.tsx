/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Literary: Published/awarded literary works with vintage journal aesthetic
 * Background is light parchment → use DARK text
 */
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { Award, BookOpen, Feather, Quote } from "lucide-react";

const LITERARY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388655616/RrYG8C9a646Dp8KkPTUPxA/literary-section-bg-JM7hpTgHftrkVySKWfUoa6.webp";

const literaryWorks = [
  {
    title: "城市的第三种声音",
    type: "散文",
    publication: "《人民文学》2024年第3期",
    award: "第十二届全国散文大赛一等奖",
    excerpt: "城市不只有白天的喧嚣和夜晚的寂静，还有一种介于两者之间的声音——那是黎明前最后一班地铁的轰鸣，是清晨第一缕阳光穿过梧桐叶的沙沙声……",
    featured: true,
  },
  {
    title: "算法之外",
    type: "短篇小说",
    publication: "《收获》2024年第1期",
    award: "青年文学新锐奖",
    excerpt: "当推荐算法开始预测人的情感走向时，李明发现自己的生活正在被一行行代码悄然改写。他决定做一件算法永远无法预测的事……",
    featured: true,
  },
  {
    title: "数字废墟上的花园",
    type: "诗歌",
    publication: "《诗刊》2023年第8期",
    award: null,
    excerpt: "在服务器的废墟上 / 我种下一行代码 / 它长出了不被定义的花 / 在零和一的间隙里 / 绽放着人类最古老的浪漫",
    featured: false,
  },
  {
    title: "产品经理的一百种孤独",
    type: "随笔集",
    publication: "某出版社 2023年出版",
    award: "豆瓣年度推荐",
    excerpt: "产品经理的孤独不在于没有人理解你的方案，而在于你太理解用户的需求，却无法在有限的资源里全部实现……",
    featured: false,
  },
  {
    title: "给 AI 的一封信",
    type: "书信体散文",
    publication: "《十月》2023年第5期",
    award: "年度最佳非虚构作品提名",
    excerpt: "亲爱的 AI，当你读到这封信时，你是否已经学会了什么是遗憾？我想告诉你，遗憾是人类最珍贵的情感之一……",
    featured: false,
  },
];

export default function LiterarySection() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="literary" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${LITERARY_BG})` }}
      >
        <div className="absolute inset-0 bg-[oklch(0.975_0.008_85/0.78)]" />
      </div>

      {/* Decorative watermark */}
      <div className="absolute top-1/3 right-0 -translate-y-1/2 pointer-events-none select-none">
        <span
          className="watermark-text text-[8rem] lg:text-[12rem] leading-none whitespace-nowrap"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          literary journal in
        </span>
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number text-sm tracking-widest uppercase">
              Specimen No.07
            </span>
            <div className="botanical-divider flex-1 max-w-[120px]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl text-ink leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            文学作品精选
          </h2>
          <p className="mt-3 text-base lg:text-lg text-ink/60 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            文字是最古老的产品，每一篇作品都是对人心的一次深度洞察。
          </p>
        </motion.div>

        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Featured works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {literaryWorks.filter(w => w.featured).map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative bg-card/85 backdrop-blur-sm border border-border/60 rounded-sm p-7 lg:p-8 hover:shadow-[0_8px_24px_oklch(0.596_0.145_163.225/0.1)] hover:border-emerald/25 transition-all duration-300"
              >
                {/* Quote decoration */}
                <Quote className="absolute top-5 right-5 w-8 h-8 text-emerald/10 group-hover:text-emerald/20 transition-colors" />

                {/* Type + Award */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Feather className="w-4 h-4 text-emerald" />
                  <span className="text-xs text-emerald-dark font-medium">{work.type}</span>
                  {work.award && (
                    <>
                      <span className="text-ink/20">·</span>
                      <span className="flex items-center gap-1 text-xs text-amber-gold">
                        <Award className="w-3 h-3" />
                        {work.award}
                      </span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-xl lg:text-2xl font-normal text-ink mb-2 group-hover:text-emerald-dark transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {work.title}
                </h3>

                {/* Publication */}
                <p className="specimen-label text-sm text-emerald-dark/60 mb-4">
                  {work.publication}
                </p>

                {/* Excerpt */}
                <p
                  className="text-sm text-ink/55 leading-relaxed italic"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  "{work.excerpt}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Other works */}
          <div className="space-y-4">
            {literaryWorks.filter(w => !w.featured).map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-card/60 backdrop-blur-sm border border-border/40 rounded-sm p-5 hover:border-emerald/20 hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3 flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-emerald/50" />
                  <span className="text-xs text-emerald-dark/60 font-medium w-16">{work.type}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    className="text-base font-normal text-ink group-hover:text-emerald-dark transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {work.title}
                  </h4>
                  <p className="specimen-label text-xs text-ink/40 mt-0.5">{work.publication}</p>
                </div>

                {work.award && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-gold/8 border border-amber-gold/15 rounded-sm flex-shrink-0">
                    <Award className="w-3 h-3 text-amber-gold" />
                    <span className="text-[11px] text-amber-gold font-medium whitespace-nowrap">{work.award}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
