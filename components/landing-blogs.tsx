import React from 'react'
import { getBlogs } from '../app/utils/mdx'
import { Link } from 'next-view-transitions';
import SectionHeading from './section-heading';
import MotionDiv from './motion-div';

async function LandingBlogs() {
  const allBlogs = await getBlogs();
  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  }
  return (
    <div>
      <SectionHeading delay={0.4} className='pb-4'>I love lakhvanu 😋</SectionHeading>
      <div className="flex flex-col gap-4">
          {allBlogs.map((blog, idx) => (
            <MotionDiv
              initial={{
                opacity: 0,
                y: 10,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                delay: 0.1 * idx,
                ease: "easeInOut"
              }}
            >
              <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className=""
            >
              <div className="flex items-center justify-between">
                 <h2 className="text-primary font-bold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-secondary text-xs">{new Date(blog.date).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric"
              })}</p>
              </div>
              <p className="text-secondary text-sm max-w-lg pt-4">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
            </MotionDiv>
          ))}
        </div>
    </div>
  )
}

export default LandingBlogs