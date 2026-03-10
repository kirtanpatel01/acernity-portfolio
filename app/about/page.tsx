import Container from '../../components/container'
import Collage from '../../components/collage'
import Timeline from '@/components/timeline'
import Heading from '@/components/heading'
import SubHeading from '@/components/sub-heading'

function page() {
  return (
    <div className='flex items-start justify-start min-h-screen'>
      <Container className='min-h-screen px-10 md:pt-20 md:pb-10'>
        <Heading>About Me</Heading>
        <SubHeading>
          I'm a passionate software engineer dedicated to building high-quality web applications. With a focus on modern technologies and user-centric design, I strive to create seamless and engaging digital experiences that solve real-world problems.
        </SubHeading>

        <Collage />

        <SubHeading>Here&apos;s my timeline</SubHeading>
        <Timeline />
        
      </Container>
    </div>
  )
}

export default page