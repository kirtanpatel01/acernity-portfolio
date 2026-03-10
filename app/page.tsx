import Heading from "@/components/heading";
import Container from "../components/container";
import LandingBlogs from "../components/landing-blogs";
import Projects from "../components/projects";
import SubHeading from "@/components/sub-heading";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:p-10">
        <Heading Tag="h1">Hellow there!</Heading>
        <SubHeading>I'm a developer and I love to create amazing web experiences. I love to create blaa blaaaa blaaa.</SubHeading>
        <Projects />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}
