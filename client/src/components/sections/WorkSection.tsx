/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Work: Professional work showcase with company timeline
 * Content: 携程 → 合合信息 → 智谱 → 华发集团
 */
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { useInView } from "../../hooks/useInView";
import { Building2, ArrowUpRight, Briefcase } from "lucide-react";

const workExperience = [
  {
    company: "携程 · IBU 市场部 Ads Automation",
    role: "AI 产品经理实习生",
    period: "2026.02 — 至今",
    works: [
      {
        title: "AI 广告 Agent 产品化与规模化",
        desc: "主导 AI 广告文案 Agent 从验证到业务推全的产品方案，建立「监控—复盘—推全」运营闭环。场景覆盖 +361%（18→83/140），Ad Strength average +14.7ppt，Hotel-City 等线路最高 +51.7ppt。",
      },
      {
        title: "产品方案与平台体验（PPC & Facebook）",
        desc: "独立负责 PPC 与 Facebook 两大板块产品方案，完成需求调研、PRD 撰写、Figma 原型输出与测试验收全流程，累计输出 40 余份 PRD，以成熟 PM 标准独立闭环从需求到上线的完整链路。",
      },
      {
        title: "数据策略与实验分析",
        desc: "熟练使用 SQL / BigQuery 完成多源数据取数与可视化分析。独立撰写 Facebook 周报、RSA 风格实验 AA/AB 报告（28 天对比窗口），输出三档推全建议。",
      },
    ],
  },
  {
    company: "合合信息 · 扫描全能王（蜜蜂教育）",
    role: "AI 教研产品实习",
    period: "2025.10 — 2026.02",
    works: [
      {
        title: "Coze Agent 工作流搭建",
        desc: "基于 Coze 平台搭建课件审核、学情分析、作文批改等多类教育智能体自动化工作流；主导分析 22 万条用户数据，输出复盘报告并推动功能迭代。",
      },
      {
        title: "Prompt 工程与多模型调优",
        desc: "负责立意、结构、语言等多维度 Prompt 编写与迭代；横向对比测试有道、好未来、百川等多个大模型 API，确定分层批改最优技术方案；AI 与教研专家评分一致性达 95%。",
      },
      {
        title: "批改 SOP 与评分体系设计",
        desc: "主导制定《语文作文批改优化 SOP》，将批改逻辑升级为「问题定位+修改指导+案例示范」三位一体模式；设计基于学段差异及文体分类的评分维度体系。",
      },
    ],
  },
  {
    company: "智谱华章 · 智谱清言",
    role: "AI 训练师（线上）",
    period: "2024.12 — 2025.03",
    works: [
      {
        title: "Prompt 模板设计与质量评估",
        desc: "独立设计并迭代 20+ 个高成功率 Prompt 模板，通过 Few-shot 与 CoT 技术将生成内容质量评分提升至基准线 145%。构建 5 维度量化评估标准，定期分析模型输出日志，追踪 Bad Case 并反馈算法团队。",
      },
    ],
  },
  {
    company: "华发集团（广东国企 TOP5）",
    role: "内容策略主管",
    period: "2018.02 — 2024.08",
    works: [
      {
        title: "品牌内容矩阵 0→1 建设",
        desc: "从零搭建集团品牌内容体系，累计发表 135 篇原创（42 万余字），杂志年发行量 10 万+册。",
      },
      {
        title: "城市级品牌项目统筹",
        desc: "统筹 15+ 城市级品牌项目，独立策划「珠海国际设计周×奈雪的茶」跨界营销，4 天超 7000 人报名，线上直播浏览量 630 万。",
      },
    ],
  },
];

export default function WorkSection() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper
      id="work"
      number="06"
      title="工作与实习"
      subtitle="从内容策略到 AI 产品，每一次转身都是能力的叠加而非替换。"
      bgClassName="parchment-bg"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className="space-y-12">
        {workExperience.map((exp, expIndex) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: expIndex * 0.15 }}
            className="relative"
          >
            {/* Company header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-sm bg-emerald/10 border border-emerald/15">
                  <Building2 className="w-4 h-4 text-emerald" />
                </div>
                <div>
                  <h3
                    className="text-lg text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-ink/50">
                    <Briefcase className="w-3 h-3" />
                    <span style={{ fontFamily: "var(--font-body)" }}>{exp.role}</span>
                  </div>
                </div>
              </div>
              <span className="section-number text-xs sm:ml-auto">{exp.period}</span>
            </div>

            {/* Work items */}
            <div className={`grid grid-cols-1 ${exp.works.length > 1 ? "md:grid-cols-2" : ""} gap-4 pl-0 sm:pl-12`}>
              {exp.works.map((work, workIndex) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: expIndex * 0.15 + workIndex * 0.1 + 0.2 }}
                  className="group bg-card border border-border/60 rounded-sm p-5 hover:shadow-[0_4px_16px_oklch(0.596_0.145_163.225/0.08)] hover:border-emerald/25 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4
                      className="text-base font-normal text-ink group-hover:text-emerald-dark transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {work.title}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 text-emerald/25 group-hover:text-emerald transition-colors flex-shrink-0 ml-2 mt-0.5" />
                  </div>
                  <p className="text-sm text-ink/55 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {work.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Divider between companies */}
            {expIndex < workExperience.length - 1 && (
              <div className="botanical-divider mt-12 max-w-xs mx-auto" />
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}