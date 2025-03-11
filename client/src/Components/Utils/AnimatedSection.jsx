import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({children}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-40 flex items-center mt-[2000px] mb-[100px] justify-center  text-white m-5"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection