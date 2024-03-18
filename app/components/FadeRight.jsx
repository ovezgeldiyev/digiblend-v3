import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function FadeRight({ children, delay, className }) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);
  return (
    <motion.span
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: 30 },
        visible: { opacity: 1, translateX: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.6,
        damping: 8,
        delay: delay,
        stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.span>
  );
}
