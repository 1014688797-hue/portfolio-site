/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * SectionWrapper: Reusable section with specimen-style numbering and botanical divider
 */
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

interface SectionWrapperProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
}

export default function SectionWrapper({
  id,
  number,
  title,
  subtitle,
  children,
  className = "",
  bgClassName = "",
}: SectionWrapperProps) {
  const { ref, inView } = useInView({ threshold: 0.08 });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 lg:py-28 ${bgClassName}`}
    >
      <div className={`container ${className}`}>
        {/* Section header with specimen numbering */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number text-sm tracking-widest uppercase">
              Specimen No.{number}
            </span>
            <div className="botanical-divider flex-1 max-w-[120px]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl text-ink leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-3 text-base lg:text-lg text-ink/55 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  );
}
