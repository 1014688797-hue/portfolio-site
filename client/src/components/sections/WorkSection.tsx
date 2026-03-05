/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Work: Professional work showcase with company timeline
 */
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { useInView } from "../../hooks/useInView";
import { Building2, ArrowUpRight, Briefcase } from "lucide-react";

const workExperience = [
  {
    company: "某头部 AI 科技公司",
    role: "高级 AI 产品经理",
    period: "2024 — 至今",
    works: [
      {
        title: "企业级 AI Agent 平台",
        desc: "主导设计企业级 AI Agent 开发平台，支持可视化编排、多模型调度与自动化工作流，服务 500+ 企业客户。",
      },
      {
        title: "智能文档处理系统",
        desc: "从 0 到 1 打造基于多模态大模型的文档智能处理产品，实现合同审核、报告提取等场景自动化。",
      },
    ],
  },
  {
    company: "某互联网大厂",
    role: "产品经理",
    period: "2022 — 2024",
    works: [
      {
        title: "内容推荐算法优化",
        desc: "负责信息流推荐产品的策略优化，通过 A/B 测试驱动的迭代方法，将用户时长提升 15%，点击率提升 22%。",
      },
      {
        title: "创作者工具套件",
        desc: "设计并推动创作者端工具矩阵建设，包括 AI 辅助写作、智能封面生成、数据看板等功能模块。",
      },
    ],
  },
  {
    company: "某创业公司",
    role: "产品经理",
    period: "2020 — 2022",
    works: [
      {
        title: "SaaS 客户管理平台",
        desc: "主导 B 端 CRM 产品从 MVP 到商业化的全过程，建立产品指标体系，实现 ARR 从 0 到 500 万的增长。",
      },
      {
        title: "数据分析中台",
        desc: "搭建公司内部数据分析平台，统一数据口径与看板体系，支撑业务决策效率提升 60%。",
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
      title="在职工作作品"
      subtitle="职业旅途中的每一站，都留下了值得记录的产品印记。"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-12">
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
