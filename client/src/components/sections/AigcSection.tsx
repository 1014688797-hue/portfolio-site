/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * AIGC: AI Agent & Prompt Engineering works showcase
 * Content: Coze/Dify agents, Prompt templates, AI toolchain
 */
import { motion } from "framer-motion";
import AnimatedCard from "../AnimatedCard";
import { useInView } from "../../hooks/useInView";
import { Sparkles, Bot, FileText, MessageSquare, Workflow, BarChart3 } from "lucide-react";

const AIGC_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388655616/RrYG8C9a646Dp8KkPTUPxA/aigc-showcase-bg-ZzE3RSrHWNwGFeceEHbqGs.webp";

const aigcWorks = [
  {
    title: "作文批改智能体 · 三位一体",
    desc: "基于 Coze 搭建的语文作文批改 Agent，融合「问题定位+修改指导+案例示范」三位一体批改逻辑，支持学段差异与文体分类，AI 与教研专家评分一致性达 95%。",
    type: "Agent 搭建",
    icon: Bot,
    tool: "Coze · 多模型对比",
  },
  {
    title: "广告文案生成 Agent · 规模化",
    desc: "携程 Ads Automation 核心 Agent，建立「监控—复盘—推全」运营闭环，场景覆盖 +361%，Ad Strength +14.7ppt，补全文案 129 万→222 万。",
    type: "Agent 产品化",
    icon: Workflow,
    tool: "携程 Ads Automation",
  },
  {
    title: "Prompt 模板库 · 20+ 高成功率",
    desc: "独立设计并迭代 20+ 个高成功率 Prompt 模板，通过 Few-shot 与 CoT 技术将生成内容质量评分提升至基准线 145%，构建 5 维度量化评估标准。",
    type: "Prompt 工程",
    icon: FileText,
    tool: "GPT · Claude · 多模型",
  },
  {
    title: "教育智能体矩阵 · 多 Agent 协作",
    desc: "在 Coze 平台搭建课件审核、学情分析、作文批改等多类教育智能体自动化工作流，分析 22 万条用户数据驱动迭代。",
    type: "Agent 矩阵",
    icon: BarChart3,
    tool: "Coze · Dify",
  },
  {
    title: "AI 对话设计 · 人格与策略",
    desc: "为 AI 陪伴机器人设计完整对话人格与多轮对话策略，涵盖情感识别模块与个性化回复机制，荣获浦软 AINX 二等奖。",
    type: "对话设计",
    icon: MessageSquare,
    tool: "多模型 · 情感计算",
  },
  {
    title: "模型效果评估 · 5 维度体系",
    desc: "构建 5 维度量化评估标准，横向对比有道、好未来、百川等多个大模型 API，确定分层批改最优技术方案，定期追踪 Bad Case 并反馈算法团队。",
    type: "模型评估",
    icon: Sparkles,
    tool: "多模型 · 评估框架",
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
          ai agent & prompt
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
            AI Agent 与 Prompt 工程
          </h2>
          <p className="mt-3 text-base lg:text-lg text-ink/60 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            从 Prompt 模板到多 Agent 协作系统，每一次与 AI 的对话都是一次产品思维的验证。
          </p>
        </motion.div>

        {/* Works grid */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aigcWorks.map((work, i) => (
            <AnimatedCard key={work.title} index={i} inView={inView}>
              <div className="p-5">
                {/* Type badge */}
                <div className="flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-emerald/8 border border-emerald/10 rounded-sm w-fit">
                  <work.icon className="w-3 h-3 text-emerald" />
                  <span className="text-[11px] text-emerald-dark font-medium">{work.type}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-normal text-ink mb-2 group-hover:text-emerald-dark transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {work.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-ink/55 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  {work.desc}
                </p>

                {/* Tool badge */}
                <div className="flex items-center gap-1.5 text-xs text-ink/40">
                  <span className="text-emerald/60">🛠</span>
                  <span>{work.tool}</span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}