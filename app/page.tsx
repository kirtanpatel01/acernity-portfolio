import Container from "./components/container";
import LandingBlogs from "./components/landing-blogs";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Hellow there!</h1>
        <p className="text-secondary text-sm pt-4 max-w-lg">
          I'm a developer and I love to create amazing web experiences. I love to create blaa blaaaa blaaa.
        </p>
        <Projects />
        <LandingBlogs />
      </Container>
    </div>
  );
}
