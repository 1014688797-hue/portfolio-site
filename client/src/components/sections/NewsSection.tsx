/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * News: Journalism works from 华发集团 period
 * Content: 135 articles, 42万+ words, various publications
 */
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import AnimatedCard from "../AnimatedCard";
import { useInView } from "../../hooks/useInView";
import { Newspaper, Calendar, BookOpen, ExternalLink } from "lucide-react";

const newsWorks = [
  {
    title: "品牌内容矩阵 0→1 建设实践",
    publication: "华发集团内部刊物",
    date: "2018-2024",
    type: "内容策略",
    excerpt: "从零搭建集团品牌内容体系，累计发表 135 篇原创作品（42 万余字），涵盖品牌故事、产品解读、人物专访、行业观察等多元体裁，杂志年发行量 10 万+册。",
    featured: true,
  },
  {
    title: "珠海国际设计周 × 奈雪的茶：跨界营销全记录",
    publication: "品牌营销案例",
    date: "2022",
    type: "深度报道",
    excerpt: "独立策划并执行城市级跨界营销活动，从创意构思到落地执行的全链路记录，4 天超 7000 人报名，线上直播浏览量 630 万。",
    featured: true,
  },
  {
    title: "城市更新中的文化叙事",
    publication: "华发集团",
    date: "2023",
    type: "专题报道",
    excerpt: "15+ 城市级品牌项目统筹经验总结，探讨城市更新语境下品牌内容如何讲述城市故事、传递文化价值。",
    featured: false,
  },
  {
    title: "AI 时代的产品经理：从洞察到落地",
    publication: "个人专栏",
    date: "2025",
    type: "行业观察",
    excerpt: "基于 40+ PRD 的实战经验，总结 AI 产品经理从需求洞察到产品上线的完整方法论，涵盖 Agent 设计、Prompt 工程与效果评估。",
    featured: false,
  },
  {
    title: "从内容策略到 AI 产品：一次能力迁徙",
    publication: "个人博客",
    date: "2026",
    type: "职业叙事",
    excerpt: "记录从 6 年内容策略主管到 AI 产品经理的转型历程，探讨内容思维与产品思维的交叉与融合。",
    featured: false,
  },
  {
    title: "魔法少女与 AI 的对话",
    publication: "创意写作",
    date: "2025",
    type: "创意实验",
    excerpt: "以魔法少女的视角，与 AI 进行一场关于创造力、情感与未来的对话实验，探索文学与人工智能的边界。",
    featured: false,
  },
];

export default function NewsSection() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper
      id="news"
      number="05"
      title="内容与写作"
      subtitle="135 篇原创 · 42 万余字。用文字记录时代，以产品人的视角观察科技与社会的交汇。"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Featured articles - larger cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {newsWorks.filter(n => n.featured).map((news, i) => (
            <AnimatedCard key={news.title} index={i} inView={inView} className="lg:min-h-[240px]">
              <div className="p-6 lg:p-7 h-full flex flex-col">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 text-[11px] font-medium text-white bg-emerald rounded-sm">
                    {news.type}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ink/40">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-normal text-ink mb-3 group-hover:text-emerald-dark transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-ink/55 leading-relaxed flex-1 mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  {news.excerpt}
                </p>

                {/* Publication */}
                <div className="flex items-center gap-2">
                  <Newspaper className="w-3.5 h-3.5 text-emerald/50" />
                  <span className="specimen-label text-sm text-emerald-dark/70">
                    {news.publication}
                  </span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Other articles - compact list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {newsWorks.filter(n => !n.featured).map((news, i) => (
            <AnimatedCard key={news.title} index={i + 2} inView={inView}>
              <div className="p-5 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-emerald/8 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-emerald" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4
                    className="text-sm font-normal text-ink mb-1.5 group-hover:text-emerald-dark transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-ink/40">
                    <span className="specimen-label">{news.publication}</span>
                    <span>·</span>
                    <span>{news.date}</span>
                    <span>·</span>
                    <span className="text-emerald/70">{news.type}</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}