import ContactForm from '@/components/contact-form'
import Container from '@/components/container'
import Heading from '@/components/heading'
import SubHeading from '@/components/sub-heading'

function page() {
  return (
    <div className='flex items-start justify-start '>
      <Container className='min-h-[calc(100vh-2.6rem)] px-10 md:pt-20 md:pb-10'>
        <Heading>
          Contact Me
        </Heading>
        <SubHeading>
          I'm open to work with you. Whatever you'll give I can everything in couple of days. If you want to done in hours then reach out to me. We can have seap of tea/coffee together <i className='text-black/40'>Of course online</i>
        </SubHeading>

        <ContactForm />
      </Container>
    </div>
  )
}

export default page