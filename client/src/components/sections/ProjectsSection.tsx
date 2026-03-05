/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Projects: Practice project showcase with specimen-card layout
 */
import SectionWrapper from "../SectionWrapper";
import AnimatedCard from "../AnimatedCard";
import { useInView } from "../../hooks/useInView";
import { ExternalLink, Layers, Brain, MessageSquare, BarChart3, Smartphone, Globe } from "lucide-react";

const projects = [
  {
    title: "AI 智能客服系统",
    desc: "基于大语言模型的智能客服解决方案，实现多轮对话、意图识别与情感分析，将客服效率提升 40%。",
    tags: ["NLP", "产品设计", "用户体验"],
    icon: MessageSquare,
    accent: "oklch(0.596 0.145 163.225)",
  },
  {
    title: "AIGC 内容创作平台",
    desc: "面向内容创作者的 AI 辅助写作平台，集成文本生成、图像创作、排版优化等功能，月活用户超 10 万。",
    tags: ["AIGC", "平台设计", "增长策略"],
    icon: Brain,
    accent: "oklch(0.432 0.120 163.225)",
  },
  {
    title: "数据可视化大屏",
    desc: "企业级实时数据监控大屏产品，支持多维度数据分析、自定义看板与智能预警，服务 50+ 企业客户。",
    tags: ["数据产品", "B端", "可视化"],
    icon: BarChart3,
    accent: "oklch(0.700 0.130 85)",
  },
  {
    title: "AI 教育助手 App",
    desc: "K12 领域的 AI 学习助手，通过个性化推荐算法为学生定制学习路径，获得教育部创新项目认证。",
    tags: ["教育科技", "移动端", "AI推荐"],
    icon: Smartphone,
    accent: "oklch(0.596 0.145 163.225)",
  },
  {
    title: "智慧社区管理系统",
    desc: "物联网+AI 驱动的社区管理平台，整合安防、物业、便民服务，覆盖 200+ 社区，服务 50 万居民。",
    tags: ["IoT", "平台架构", "B2G"],
    icon: Globe,
    accent: "oklch(0.432 0.120 163.225)",
  },
  {
    title: "多模态内容审核引擎",
    desc: "融合文本、图像、视频的 AI 内容审核系统，准确率达 99.2%，日处理量超千万条，大幅降低人工成本。",
    tags: ["AI安全", "多模态", "中台"],
    icon: Layers,
    accent: "oklch(0.700 0.130 85)",
  },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper
      id="projects"
      number="01"
      title="实践项目"
      subtitle="从 0 到 1 的产品实践，每一个项目都是一次对用户需求的深度探索与技术可能性的验证。"
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
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] text-emerald-dark/70 bg-emerald/5 border border-emerald/10 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs text-emerald hover:text-emerald-dark transition-colors duration-300"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                查看详情
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
