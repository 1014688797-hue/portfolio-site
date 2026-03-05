/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Plans: Marketing/product plans showcase with timeline-style layout
 */
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { useInView } from "../../hooks/useInView";
import { FileCheck, TrendingUp, Users, Target, Award, Lightbulb } from "lucide-react";

const plans = [
  {
    title: "「AI+教育」产品战略规划书",
    desc: "面向 K12 教育市场的 AI 产品矩阵战略规划，涵盖市场分析、竞品研究、产品路线图与商业模式设计。",
    result: "获公司年度最佳战略提案",
    icon: Target,
    year: "2025",
  },
  {
    title: "新零售智能导购方案",
    desc: "基于计算机视觉与推荐算法的线下零售智能化升级方案，从用户动线分析到个性化推荐的全链路设计。",
    result: "落地 3 家标杆门店，GMV 提升 25%",
    icon: TrendingUp,
    year: "2024",
  },
  {
    title: "社交媒体 AIGC 运营策划",
    desc: "为某头部品牌设计的 AIGC 内容运营体系，包括 AI 内容生产流程、审核机制与效果评估框架。",
    result: "内容产出效率提升 300%",
    icon: Users,
    year: "2024",
  },
  {
    title: "企业数字化转型白皮书",
    desc: "传统制造业数字化转型的系统性方案，从组织架构、技术选型到实施路径的全面规划。",
    result: "被行业协会收录为参考案例",
    icon: Lightbulb,
    year: "2023",
  },
  {
    title: "AI 产品用户增长方案",
    desc: "针对 AI 工具类产品的用户增长策略，涵盖获客、激活、留存、变现的 AARRR 全漏斗优化方案。",
    result: "3 个月内 DAU 增长 180%",
    icon: Award,
    year: "2023",
  },
];

export default function PlansSection() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper
      id="plans"
      number="04"
      title="策划案"
      subtitle="每一份策划案都是一次系统性思考的结晶，从洞察到落地，用产品思维解决真实问题。"
      bgClassName="parchment-bg"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald/40 via-emerald/20 to-transparent lg:-translate-x-[1px]" />

        {/* Timeline items */}
        <div className="space-y-10 lg:space-y-14">
          {plans.map((plan, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex items-start gap-6 lg:gap-0 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 lg:left-1/2 w-3 h-3 bg-emerald rounded-full border-[3px] border-parchment -translate-x-1.5 lg:-translate-x-1.5 mt-7 z-10 shadow-[0_0_0_4px_oklch(0.596_0.145_163.225/0.15)]" />

                {/* Content card */}
                <div className={`ml-12 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${isLeft ? "lg:pr-0" : "lg:pl-0"}`}>
                  <div className="group bg-card border border-border/60 rounded-sm p-6 hover:shadow-[0_6px_20px_oklch(0.596_0.145_163.225/0.1)] hover:border-emerald/25 transition-all duration-300">
                    {/* Year + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <plan.icon className="w-4 h-4 text-emerald" />
                        <span className="section-number text-xs">{plan.year}</span>
                      </div>
                      <FileCheck className="w-4 h-4 text-emerald/25 group-hover:text-emerald/50 transition-colors" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-base font-normal text-ink mb-2 group-hover:text-emerald-dark transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {plan.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-ink/55 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                      {plan.desc}
                    </p>

                    {/* Result */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-emerald/5 border border-emerald/10 rounded-sm">
                      <Award className="w-3.5 h-3.5 text-amber-gold flex-shrink-0" />
                      <span className="text-xs text-emerald-dark font-medium" style={{ fontFamily: "var(--font-body)" }}>
                        {plan.result}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
