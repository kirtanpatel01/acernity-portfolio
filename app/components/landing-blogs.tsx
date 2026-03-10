import React from 'react'
import { getBlogs } from '../utils/mdx'
import { Link } from 'next-view-transitions';

async function LandingBlogs() {
  const allBlogs = await getBlogs();
  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  }
  return (
    <div>
      <p className='text-secondary text-sm pt-4 mb-12'>I love lakhvanu 😋</p>
      <div className="flex flex-col gap-4">
          {allBlogs.map((blog) => (
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
          ))}
        </div>
    </div>
  )
}

export default LandingBlogs