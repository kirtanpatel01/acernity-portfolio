'use client'

import { motion } from 'motion/react'
import { projectTraceSource } from 'next/dist/build/swc/generated-native'
import Image from 'next/image'
import Link from 'next/link'
import SubHeading from './sub-heading'

function Projects() {
  const projects = [
    {
      title: "Innovation Lab",
      src: "https://images.unsplash.com/photo-1504610926078-a1611febcad3?w=800&auto=format&fit=crop&q=60",
      description: "Exploring cutting-edge technologies.",
      href: "#"
    },
    {
      title: "Digital Ecosystem",
      src: "https://images.unsplash.com/photo-1491947153227-33d59da6c448?w=800&auto=format&fit=crop&q=60",
      description: "Interconnected digital solutions.",
      href: "#"
    },
    {
      title: "Neural Network",
      src: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=800&auto=format&fit=crop&q=60",
      description: "Intelligent data processing.",
      href: "#"
    },
    {
      title: "Future Interface",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
      description: "Futuristic user interfaces.",
      href: "#"
    },
    {
      title: "System Architecture",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
      description: "Robust back-end systems.",
      href: "#"
    },
    {
      title: "Global Connectivity",
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
      description: "Seamless worldwide networks.",
      href: "#"
    },
  ]
  return (
    <div className='py-10'>
      <SubHeading>
        I love to create meaningful sites which can serves someone (at least it SHOULD SERVE ME!)
      </SubHeading>

      <div className="grid md:grid-cols-2 gap-4 py-10">
        {projects.map((project, idx) => (
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
                className='h-72 w-full group-hover:scale-[1.01] transition-all duration-300 object-cover rounded-xl'
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
