/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Projects: Real AI projects + hackathon achievements
 * Content: SpacePlay, 数字幻窗, Coze Agent, etc.
 */
import SectionWrapper from "../SectionWrapper";
import AnimatedCard from "../AnimatedCard";
import { useInView } from "../../hooks/useInView";
import { ExternalLink, Trophy, Bot, Code2, Palette, BarChart3, Cpu } from "lucide-react";

const projects = [
  {
    title: "SpacePlay · 空间剧场",
    desc: "AI+文化方向的沉浸式空间体验产品。从 idea 到落地，带队完成全栈开发与 UI 设计，荣获抖音 AI 创变者二等奖，晋级华东大区赛，获投资机构及南京 1912 园区合作邀约。",
    tags: ["AI+文化", "全栈开发", "队长"],
    icon: Palette,
    accent: "oklch(0.596 0.145 163.225)",
    highlight: "抖音 AI 创变者 二等奖",
  },
  {
    title: "数字幻窗 · AI 硬件",
    desc: "从用户场景洞察出发，定义 AI 硬件产品交互与体验。荣获南客松生活创新体验银奖、影石 ThinkBoard 奖。",
    tags: ["AI 硬件", "产品设计", "交互体验"],
    icon: Cpu,
    accent: "oklch(0.432 0.120 163.225)",
    highlight: "南客松银奖 · 影石 ThinkBoard 奖",
  },
  {
    title: "AI 陪伴机器人",
    desc: "设计面向情感陪伴场景的 AI 对话机器人产品方案，涵盖人格定义、多轮对话策略与情感识别模块，荣获浦软 AINX 二等奖。",
    tags: ["AI 陪伴", "情感计算", "对话设计"],
    icon: Bot,
    accent: "oklch(0.700 0.130 85)",
    highlight: "浦软 AINX 二等奖",
  },
  {
    title: "Coze 教育 Agent 矩阵",
    desc: "在 Coze 平台搭建课件审核、学情分析、作文批改等多类教育智能体，分析 22 万条用户数据驱动迭代，AI 评分与专家一致性达 95%。",
    tags: ["Coze", "Agent", "教育科技"],
    icon: Code2,
    accent: "oklch(0.596 0.145 163.225)",
    highlight: "合合信息实习项目",
  },
  {
    title: "AI 广告文案 Agent",
    desc: "携程 Ads Automation 核心产品，主导从验证到推全的 Agent 产品方案，场景覆盖 +361%，Ad Strength +14.7ppt，补全文案 129 万→222 万。",
    tags: ["Agent 产品化", "规模化", "数据驱动"],
    icon: BarChart3,
    accent: "oklch(0.432 0.120 163.225)",
    highlight: "携程实习项目",
  },
  {
    title: "全球 A2A 黑客松 · 知乎特别奖",
    desc: "Agent-to-Agent 协作场景的创意方案，探索多智能体协同的落地可能性，荣获知乎特别奖。",
    tags: ["A2A", "多 Agent", "协作"],
    icon: Trophy,
    accent: "oklch(0.700 0.130 85)",
    highlight: "A2A 知乎特别奖",
  },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper
      id="projects"
      number="01"
      title="项目与黑客松"
      subtitle="6 战 6 奖 · AI 黑客松全胜战绩。从 Agent 产品化到 AI 硬件，用代码与产品思维验证每一个想法。"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <AnimatedCard key={project.title} index={i} inView={inView}>
            <div className="p-6 lg:p-7">
              {/* Icon + Number */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="p-2.5 rounded-sm"
                  style={{ backgroundColor: `${project.accent}15` }}
                >
                  <project.icon className="w-5 h-5" style={{ color: project.accent }} />
                </div>
                <span className="section-number text-xs opacity-40">
                  No.{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-lg font-normal text-ink mb-3 group-hover:text-emerald-dark transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-ink/55 leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] text-emerald-dark/70 bg-emerald/5 border border-emerald/10 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlight */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-amber-gold/8 border border-amber-gold/15 rounded-sm">
                <Trophy className="w-3.5 h-3.5 text-amber-gold flex-shrink-0" />
                <span className="text-xs text-amber-gold font-medium">
                  {project.highlight}
                </span>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}