import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-20 md:py-28 relative overflow-hidden ${className}`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
