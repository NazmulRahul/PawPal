import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, h, w, index, isRepeated }) => {
  const triggerOnce = isRepeated?false:true
  const { ref, inView } = useInView({ triggerOnce, threshold: 0.5 });

  return (
    <motion.div
      style={{ height: `${h}px`, width: `${w}px` }}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.3 }} // Stagger effect
      className="flex items-center justify-center m-5"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
