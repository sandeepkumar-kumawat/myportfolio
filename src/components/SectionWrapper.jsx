import { motion } from "framer-motion";

export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`py-20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">{children}</div>
    </motion.section>
  );
}
