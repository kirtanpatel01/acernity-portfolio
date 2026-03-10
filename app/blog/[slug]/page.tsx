import { Metadata } from "next";
import Container from "../../../components/container";
import { getBlogFrontmatter, getSingleBlog } from "@/app/utils/mdx";
import { redirect } from "next/navigation";
import Image from "next/image";
import Scales from "@/components/scales";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;

  const frontamtter = await getBlogFrontmatter(slug);
  return {
    title: `${frontamtter?.title} - by Kirtan Patel`,
    description: `${frontamtter?.description}`,
  };
}

export default async function SinglePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const blog = await getSingleBlog(slug);

  if (!blog) return redirect("/blog");

  const { content, frontmatter } = blog;

  console.log(frontmatter)

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Image src={frontmatter?.image} alt={frontmatter?.title} width={1000} height={1000} className="max-h-96 w-full max-w-2xl mx-auto shadow-2xl mb-20 rounded-2xl" />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
