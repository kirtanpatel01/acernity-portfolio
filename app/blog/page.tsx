import { Metadata } from "next";
import Container from "../components/container";
import { getBlogs } from "../utils/mdx";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All blogs - Kirtan Patel",
  description: "Read my latest articles and thoughts.",
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  }

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          All blogs
        </h1>
        <p className="text-secondary text-sm pt-4 max-w-lg">
          I'm a developer and I love to create amazing web experiences. I love to create blaa blaaaa blaaa.
        </p>
        <div className="flex flex-col gap-4 py-10">
          {blogs.map((blog) => (
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
              <p className="text-secondary text-sm max-w-lg pt-2">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
