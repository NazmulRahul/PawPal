import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TransportHero = () => {
  const { ref, inView } = useInView({ triggerOnce:true, threshold: 0.5 });

  return (
    <div className="w-[40%] h-full flex justify-start items-start pt-[5%] pl-[10%]">
        <div className="relative">
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, x: -50}}
                animate={inView?{opacity:1,x:0}:{opacity:0, x:-50}}
                transition={{ duration: 1.2, ease: "easeOut", delay: 2 * 0.3 }}
                className="w-[250px] h-[350px] bg-amber-600 absolute inset-0"
            >
                <motion.div 
                ref={ref}
                initial={{ opacity: 0, x: 50}}
                animate={inView?{opacity:1,x:0}:{opacity:0, x:50}}
                transition={{ duration: 1.2, ease: "easeOut", delay: 4 * 0.3 }}
                className="w-[250px] h-[350px] bg-red-600 relative top-[50%] left-[50%]"
                >

                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default TransportHero
