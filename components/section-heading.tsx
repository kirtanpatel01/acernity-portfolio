'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

function SectionHeading({
  children,
  delay = 0,
  className
}: {
  children: string,
  delay?: number,
  className?: string
}) {
  return (
    <h2 className={cn('relative mt-4 w-fit text-sm font-normal', className)}>
      <Background />
      {children.split(" ").map((word, idx) => (
        <motion.span
          initial={{
            opacity: 0,
            y: 0,
            filter: "blur(2px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}
          transition={{
            delay: delay + idx * 0.05,
            duration: 0.5,
            ease: "easeInOut",
          }}
          key={word + idx}
          viewport={{
            once: true
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  )
}

export default SectionHeading

const Background = () => {
  return (
  <motion.div 
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
      delay: 1,
    }}
    className="absolute h-full w-full inset-0 scale-[1.02] bg-neutral-100 ">
    <div className="h-1 w-1 rounded-full bg-neutral-200 absolute -top-px -left-px"></div>
    <div className="h-1 w-1 rounded-full bg-neutral-200 absolute -top-px -right-px"></div>
    <div className="h-1 w-1 rounded-full bg-neutral-200 absolute -bottom-px -left-px"></div>
    <div className="h-1 w-1 rounded-full bg-neutral-200 absolute -bottom-px -right-px"></div>
  </motion.div>)
}