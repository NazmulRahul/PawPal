import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const RollingElement = ({ children ,index=0}) => {
  const [isUnrolled, setIsUnrolled] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUnrolled(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isUnrolled ? contentRef.current?.scrollHeight : 0,
        opacity: isUnrolled ? 1 : 0,
      }}
      transition={{ duration: 1, ease: "easeOut" ,delay: index * 0.3}}
      style={{
        overflow: "hidden",
      }}
      className=" flex-grow " 
    >
      <div className="h-full w-full" ref={contentRef}>
        {children}
      </div>
    </motion.div>
  );
};

export default RollingElement;