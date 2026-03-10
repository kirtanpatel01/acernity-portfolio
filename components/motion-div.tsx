'use client'

import { HTMLMotionProps, motion } from 'motion/react'

function MotionDiv({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div {...props}>{children}</motion.div>
  )
}

export default MotionDiv