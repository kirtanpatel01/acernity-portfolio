'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'motion/react'

function Heading({
  Tag = 'h1',
  children,
  className
}: {
  Tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
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
      }}
      viewport={{
        once: true
      }}
    >
      <Tag className={cn("text-2xl md:text-4xl font-bold tracking-tight text-primary drop-shadow-lg", className)}>
        {children}
      </Tag>
    </motion.div>
  )
}

export default Heading