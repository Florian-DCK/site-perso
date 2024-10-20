'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'

// Custom hook to detect if an element is in view
const useInView = (threshold: number) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, threshold]);

  return { ref, isInView };
};

function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // exit={{ y: 100, opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

const SlideInLeft = ({ children }: { children: ReactNode }) => {
  const { ref, isInView } = useInView(0.1);

  return (
    <motion.div
      className='self-start'
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
        pointerEvents: isInView ? 'auto' : 'none',
      }}
    >
      {children}
    </motion.div>
  );
};

const SlideInLeftDelayed = ({ children }: { children: ReactNode }) => {
  const { ref, isInView } = useInView(0.1);

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s',
      }}
    >
      {children}
    </motion.div>
  );
};

const BounceScaleUpOnHover = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 700 }}
    >
      {children}
    </motion.div>
  );
};

export { FadeIn, SlideInLeft , SlideInLeftDelayed, BounceScaleUpOnHover };