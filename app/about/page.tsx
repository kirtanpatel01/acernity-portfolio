import Container from '../../components/container'
import Collage from '../../components/collage'
import Timeline from '@/components/timeline'
import Heading from '@/components/heading'
import SubHeading from '@/components/sub-heading'
import Scales from '@/components/scales'
import SectionHeading from '@/components/section-heading'

function page() {
  return (
    <div className='flex items-start justify-start min-h-screen'>
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <SectionHeading className='px-4'>
          Khbr nahi yrr about ma jangal na phota kem mukela che!?
        </SectionHeading>

        <Collage />

        <SubHeading className='px-4'>Here&apos;s my timeline</SubHeading>
        <Timeline />

      </Container>
    </div>
  )
}

export default page