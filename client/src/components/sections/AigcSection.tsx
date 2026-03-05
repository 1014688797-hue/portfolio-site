/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * AIGC: AI-generated creative works gallery with tech-botanical background
 */
import { motion } from "framer-motion";
import AnimatedCard from "../AnimatedCard";
import { useInView } from "../../hooks/useInView";
import { Sparkles, Wand2, Image, FileText, Music, Video } from "lucide-react";

const AIGC_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388655616/RrYG8C9a646Dp8KkPTUPxA/aigc-showcase-bg-ZzE3RSrHWNwGFeceEHbqGs.webp";

const aigcWorks = [
  {
    title: "AI 生成概念插画系列",
    desc: "使用 Midjourney 与 Stable Diffusion 创作的概念艺术插画，探索 AI 与人类审美的边界。",
    type: "图像生成",
    icon: Image,
    tool: "Midjourney / SD",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
  },
  {
    title: "AI 辅助短视频脚本",
    desc: "利用 GPT-4 生成创意短视频脚本，结合 Runway 进行视频制作，累计播放量超百万。",
    type: "视频创作",
    icon: Video,
    tool: "GPT-4 / Runway",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
  },
  {
    title: "智能文案生成工具",
    desc: "基于 Fine-tuned 模型的营销文案生成器，支持多风格、多场景的一键生成，服务 200+ 品牌。",
    type: "文本生成",
    icon: FileText,
    tool: "GPT / Claude",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
  },
  {
    title: "AI 配乐与音效设计",
    desc: "使用 Suno AI 和 Udio 为短片项目创作原创配乐，探索 AI 在音乐创作领域的可能性。",
    type: "音频生成",
    icon: Music,
    tool: "Suno / Udio",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
  },
  {
    title: "Prompt 工程方法论",
    desc: "系统总结的 Prompt Engineering 最佳实践，涵盖思维链、角色扮演、结构化输出等核心技巧。",
    type: "方法论",
    icon: Wand2,
    tool: "多模型",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
  },
  {
    title: "AI 数字人形象设计",
    desc: "结合 AI 换脸与虚拟形象技术，为品牌打造数字人 IP，应用于直播、客服等多个场景。",
    type: "数字人",
    icon: Sparkles,
    tool: "HeyGen / D-ID",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
  },
];

export default function AigcSection() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="aigc" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
        style={{ backgroundImage: `url(${AIGC_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-parchment via-transparent to-parchment" />

      {/* Decorative watermark */}
      <div className="absolute top-20 left-0 pointer-events-none select-none">
        <span
          className="watermark-text text-[6rem] lg:text-[10rem] leading-none whitespace-nowrap"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          artificial intelligence
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
              Specimen No.03
            </span>
            <div className="botanical-divider flex-1 max-w-[120px]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl text-ink leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            AIGC 作品
          </h2>
          <p className="mt-3 text-base lg:text-lg text-ink/60 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            当 AI 成为画笔，创意便有了无限可能。这里记录着我与 AI 协作创作的每一次实验与突破。
          </p>
        </motion.div>

        {/* Works grid */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aigcWorks.map((work, i) => (
            <AnimatedCard key={work.title} index={i} inView={inView}>
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
                {/* Type badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-sm">
                  <work.icon className="w-3 h-3 text-emerald" />
                  <span className="text-[11px] text-ink/80 font-medium">{work.type}</span>
                </div>
                {/* Tool badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-ink/60 backdrop-blur-sm rounded-sm">
                  <span className="text-[10px] text-white/90 font-medium">{work.tool}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-base font-normal text-ink mb-2 group-hover:text-emerald-dark transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {work.title}
                </h3>
                <p className="text-sm text-ink/55 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {work.desc}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
