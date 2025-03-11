import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({children, h, w}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      style={{height:`${h}px`, width:`${w}px`}}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex items-center justify-center bg-amber-300  text-white m-5"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection