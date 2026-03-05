/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Skills: Botanical tree of knowledge with skill visualization
 */
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { useInView } from "../../hooks/useInView";

const SKILLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388655616/RrYG8C9a646Dp8KkPTUPxA/skills-decoration-77YjB7UNbd69kDYbPnpQXb.webp";

const skillCategories = [
  {
    category: "产品能力",
    color: "oklch(0.596 0.145 163.225)",
    skills: [
      { name: "需求分析与用户研究", level: 95 },
      { name: "产品规划与路线图", level: 90 },
      { name: "原型设计与交互", level: 88 },
      { name: "数据分析与决策", level: 85 },
      { name: "项目管理", level: 92 },
    ],
  },
  {
    category: "AI 技术",
    color: "oklch(0.432 0.120 163.225)",
    skills: [
      { name: "大语言模型应用", level: 90 },
      { name: "Prompt Engineering", level: 92 },
      { name: "AIGC 工具链", level: 88 },
      { name: "机器学习基础", level: 75 },
      { name: "AI 产品化落地", level: 93 },
    ],
  },
  {
    category: "创意与内容",
    color: "oklch(0.700 0.130 85)",
    skills: [
      { name: "内容策划与运营", level: 90 },
      { name: "新闻采编与写作", level: 85 },
      { name: "文学创作", level: 82 },
      { name: "视觉设计感知", level: 78 },
      { name: "跨媒体叙事", level: 80 },
    ],
  },
];

function SkillBar({ name, level, index, inView, color }: { name: string; level: number; index: number; inView: boolean; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="mb-4 last:mb-0 group/bar"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-ink/75" style={{ fontFamily: "var(--font-body)" }}>
          {name}
        </span>
        <span className="section-number text-xs opacity-60">{level}%</span>
      </div>
      <div className="h-2 bg-emerald/8 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color} 0%, ${color}88 100%)`,
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper
      id="skills"
      number="02"
      title="技能图谱"
      subtitle="如同一棵不断生长的知识之树，每一项技能都是扎根实践、向阳而生的枝叶。"
      bgClassName="parchment-bg"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Skills illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <div className="relative">
            <img
              src={SKILLS_IMG}
              alt="Tree of Knowledge & Skills"
              className="w-full max-w-md rounded-sm shadow-[0_4px_20px_oklch(0.596_0.145_163.225/0.1)]"
            />
            {/* Decorative label */}
            <div className="absolute -bottom-3 -right-3 bg-card border border-border/60 rounded-sm px-3 py-1.5 shadow-sm">
              <span className="specimen-label text-xs text-emerald-dark/60">
                Knowledge Tree — 2025
              </span>
            </div>
          </div>
        </motion.div>

        {/* Skill bars */}
        <div className="lg:col-span-7 space-y-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              className="bg-card/50 border border-border/40 rounded-sm p-5 lg:p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                <span
                  className="text-base text-ink font-normal"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.category}
                </span>
                <div className="botanical-divider flex-1 max-w-[60px]" />
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={catIndex * 5 + i}
                  inView={inView}
                  color={cat.color}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
