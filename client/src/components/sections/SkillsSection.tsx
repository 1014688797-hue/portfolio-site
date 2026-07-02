/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Skills: AI product capabilities + Vibe Coding + languages
 */
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { useInView } from "../../hooks/useInView";

const skillCategories = [
  {
    category: "AI 产品能力",
    color: "oklch(0.596 0.145 163.225)",
    skills: [
      { name: "Agent 产品方案设计", level: 95 },
      { name: "PRD 撰写与需求分析", level: 93 },
      { name: "Figma 高保真原型", level: 90 },
      { name: "模型效果评估", level: 85 },
      { name: "竞品分析与市场洞察", level: 88 },
    ],
  },
  {
    category: "Vibe Coding",
    color: "oklch(0.432 0.120 163.225)",
    skills: [
      { name: "Codex CLI / OpenCode", level: 90 },
      { name: "Cursor / Trae", level: 92 },
      { name: "Coze / Dify Agent 搭建", level: 93 },
      { name: "Python / SQL / API", level: 82 },
      { name: "Prompt Engineering", level: 95 },
    ],
  },
  {
    category: "内容与创意",
    color: "oklch(0.700 0.130 85)",
    skills: [
      { name: "内容策略与品牌建设", level: 92 },
      { name: "新闻采编与深度报道", level: 88 },
      { name: "文学创作（诗词/散文）", level: 85 },
      { name: "跨界营销策划", level: 82 },
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
      subtitle="AI 产品 × Vibe Coding × 内容创意 — 三者交叉，定义独特的 AI Builder 能力模型。"
      bgClassName="parchment-bg"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left side — language & tools summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          {/* Language card */}
          <div className="bg-card/50 border border-border/40 rounded-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald" />
              <span className="text-base text-ink font-normal" style={{ fontFamily: "var(--font-display)" }}>
                语言能力
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-ink/60">雅思</span>
                <span className="text-ink font-medium">6.5（阅读写作 7.0）</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink/60">CET-6</span>
                <span className="text-ink font-medium">566</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink/60">AI 前沿资料</span>
                <span className="text-ink font-medium">无障碍阅读</span>
              </div>
            </div>
          </div>

          {/* Education card */}
          <div className="bg-card/50 border border-border/40 rounded-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-dark" />
              <span className="text-base text-ink font-normal" style={{ fontFamily: "var(--font-display)" }}>
                教育背景
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-ink font-medium">南京大学</span>
                  <span className="text-ink/40 text-xs">2024 — 2027</span>
                </div>
                <p className="text-xs text-ink/50">新闻与传播 硕士 · 复试笔面第一 · GPA 前 1%</p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-ink font-medium">华中师范大学</span>
                  <span className="text-ink/40 text-xs">2014 — 2018</span>
                </div>
                <p className="text-xs text-ink/50">文学 学士 · GPA 前 15%</p>
              </div>
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