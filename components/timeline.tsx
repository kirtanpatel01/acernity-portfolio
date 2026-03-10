'use client'

import React, { useRef } from 'react'
import { motion, useInView } from "motion/react";
import { IconCircleCheckFilled } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
}

const data: Data[] = [
  {
    title: "2025",
    content: [
      {
        title: "Reached $20K MRR with my VSCode fork.",
        description: "Reached the revenue milestone of $28K MRR with my VSCode fork.",
      },
    ]
  },
  {
    title: "2024",
    content: [
      {
        title: "Contributed to Next.js core.",
        description: "Had my first PR merged into the Next.js repository, improving hydration performance.",
      },
    ]
  },
  {
    title: "2023",
    content: [
      {
        title: "Joined Aceternity as a Senior Developer.",
        description: "Started working with a world-class team to build beautiful UI components and templates.",
      },
    ]
  },
  {
    title: "2022",
    content: [
      {
        title: "Launched my first SaaS product.",
        description: "Successfully launched a productivity tool for developers that reached 5,000 active users.",
      },
    ]
  },
  {
    title: "2021",
    content: [
      {
        title: "Graduated with a degree in Computer Science.",
        description: "Completed my Bachelor's degree with honors and started my career as a full-stack developer.",
      },
    ]
  }
]

function Timeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 })

  return (
    <div className='py-10'>
      {data.map((year, index) => (
        <div ref={ref} key={year.title} className='flex flex-col mb-4'>
          <motion.h2
            initial={{
              filter: "blur(10px)",
              opacity: 0,
            }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index
            }}
            className='w-fit font-bold text-black px-2 py-1 rounded-md shadow-aceternity mb-2'
          >
            {year.title}
          </motion.h2>
          {year.content.map((item, idx) => (
            <div key={item.title} className='pl-4'>
              <Step
                isInView={isInView}
                idx={idx}
              >
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.2 * idx
                  }}
                  className='text-neutral-600'
                >
                  {item.title}
                </motion.h3>
              </Step>
              {item.description && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.3 * idx
                  }}
                  className='pt-1 pl-4 text-sm text-neutral-400'
                >
                  {item.description}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Timeline

const Step = ({
  className,
  children,
  isInView,
  idx
}: {
  className?: string,
  children: React.ReactNode,
  isInView: boolean,
  idx: number
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx
      }}
      className={cn("flex items-center gap-2", className)}>
      <IconCircleCheckFilled className='mt-0.5 h-4 w-4 text-neutral-500' />
      {children}
    </motion.div>
  )
}