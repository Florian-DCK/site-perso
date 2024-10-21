'use client'

import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'


// Custom hook to detect if an element is in view

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

const DisapearOnScroll = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div className=' max-w-full h-full'
    style={{

      opacity: isInView ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
    }}
    >  
      <div className='absolute top-0 size-2' ref={ref}>

      </div>

        {children}

    </motion.div>
  );
}

export { FadeIn, SlideInLeft , SlideInLeftDelayed, DisapearOnScroll };