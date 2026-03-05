/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * News: Journalism works showcase with newspaper-style layout
 */
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import AnimatedCard from "../AnimatedCard";
import { useInView } from "../../hooks/useInView";
import { Newspaper, Calendar, BookOpen, ExternalLink } from "lucide-react";

const newsWorks = [
  {
    title: "AI 浪潮下的产品经理转型之路",
    publication: "36氪",
    date: "2025.01",
    type: "深度报道",
    excerpt: "深入调研 50+ 位产品经理的转型经历，揭示 AI 时代产品经理角色演变的趋势与挑战。",
    featured: true,
  },
  {
    title: "大模型落地：从实验室到生产线的距离",
    publication: "机器之心",
    date: "2024.09",
    type: "行业分析",
    excerpt: "走访 10 家 AI 企业，记录大模型从技术突破到产品落地的真实故事与经验教训。",
    featured: true,
  },
  {
    title: "AIGC 创作者生态调查报告",
    publication: "极客公园",
    date: "2024.06",
    type: "调查报告",
    excerpt: "基于 1000+ 份问卷和 30+ 深度访谈，描绘 AIGC 创作者群体的生存现状与未来展望。",
    featured: false,
  },
  {
    title: "智慧城市建设的「最后一公里」",
    publication: "南方周末",
    date: "2024.03",
    type: "特稿",
    excerpt: "跟踪报道某二线城市智慧社区试点项目，记录技术理想与现实落差之间的故事。",
    featured: false,
  },
  {
    title: "当 AI 学会写诗：人机协作创作实验",
    publication: "新周刊",
    date: "2023.11",
    type: "文化观察",
    excerpt: "邀请 5 位诗人与 AI 进行协作创作实验，探讨人工智能时代文学创作的边界与可能。",
    featured: false,
  },
  {
    title: "数据隐私保护的中国实践",
    publication: "财经杂志",
    date: "2023.08",
    type: "政策解读",
    excerpt: "解读《个人信息保护法》实施两年来的企业合规实践，采访法律专家与企业负责人。",
    featured: false,
  },
];

export default function NewsSection() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper
      id="news"
      number="05"
      title="新闻作品"
      subtitle="用文字记录时代脉搏，以产品人的视角观察科技与社会的交汇。"
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

                {/* Publication + link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Newspaper className="w-3.5 h-3.5 text-emerald/50" />
                    <span className="specimen-label text-sm text-emerald-dark/70">
                      {news.publication}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald/30 group-hover:text-emerald transition-colors" />
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
