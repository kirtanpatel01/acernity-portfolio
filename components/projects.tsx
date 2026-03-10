'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import SubHeading from './sub-heading'
import { projects } from '@/constants/projects'
import SectionHeading from './section-heading'

function Projects() {
  return (
    <div className='py-10'>
      <SectionHeading delay={0.2}>
        I love to create meaningful sites which can serves someone (at least it SHOULD SERVE ME!)
      </SectionHeading>

      <div className="grid md:grid-cols-3 gap-4 py-4">
        {projects.slice(0,3).map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut"
            }}
            key={project.title}
            className='group mb-4'
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                width={300}
                height={300}
                className='h-48 w-full group-hover:scale-[1.01] transition-all duration-300 object-cover rounded-xl'
              />
              <h2 className='z-20 mt-1 font-medium tracking-tight text-neutral-500 dark:text-neutral-400'>
                {project.title}
              </h2>
              <p className='text-sm mt-2 text-neutral-500 dark:text-neutral-400 max-w-sm'>
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
