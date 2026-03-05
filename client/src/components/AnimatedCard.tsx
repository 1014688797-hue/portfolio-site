/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * AnimatedCard: Specimen-style card with hover effects and stagger animation
 */
import { motion } from "framer-motion";

interface AnimatedCardProps {
  index: number;
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
}

export default function AnimatedCard({
  index,
  children,
  className = "",
  inView = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`group relative bg-card border border-border/60 rounded-sm overflow-hidden
        shadow-[0_2px_8px_oklch(0.596_0.145_163.225/0.05)]
        hover:shadow-[0_8px_28px_oklch(0.596_0.145_163.225/0.1)]
        hover:border-emerald/25
        transition-[box-shadow,border-color] duration-300
        ${className}`}
    >
      {/* Top botanical accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
      {children}
    </motion.div>
  );
}
