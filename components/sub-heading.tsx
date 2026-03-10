'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'motion/react'

function SubHeading({ 
  Tag = "p", 
  children,
  className,
} : { 
  Tag?: "p" | "span" | "div", 
  children: React.ReactNode, 
  className?: string 
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: 10
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2
      }}
      viewport={{
        once: true
      }}
    >
      <Tag className={cn("text-secondary text-sm pt-4 max-w-lg", className)}>
        {children}
      </Tag>
    </motion.div>
  )
}

export default SubHeading