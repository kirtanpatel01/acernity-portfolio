import Container from '../../components/container'
import Projects from '@/components/projects'
import Heading from '@/components/heading'
import SubHeading from '@/components/sub-heading'

function page() {
  return (
    <div className='flex items-start justify-start min-h-screen'>
      <Container className='min-h-screen px-10 md:pt-20 md:pb-10'>
        <Heading>Projects</Heading>
        <SubHeading>Here are some of the projects I&apos;ve worked on.</SubHeading>
        <Projects />
      </Container>
    </div>
  )
}

export default page