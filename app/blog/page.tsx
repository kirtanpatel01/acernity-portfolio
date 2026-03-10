import { Metadata } from "next";
import Container from "../../components/container";
import { getBlogs } from "../utils/mdx";
import { Link } from "next-view-transitions";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";

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
      <Container className="min-h-screen p-4 md:pt-20 md:p-10">
        <Heading>All Blogs</Heading>
        <SubHeading>I'm a developer and I love to create amazing web experiences. I love to create blaa blaaaa blaaa.</SubHeading>
        <div className="flex flex-col gap-8 py-10">
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
                {truncate(blog.description || "", 145)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
