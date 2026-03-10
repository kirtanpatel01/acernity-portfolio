import { Testimonial, testimonials } from '@/constants/testimonials'
import Marquee from "react-fast-marquee"
import SectionHeading from './section-heading'

function Testimonials() {
  return (
    <div className='my-4 py-4 px-4 border-y border-neutral-100 shadow-section-inset'>
        <SectionHeading delay={0.8}>People love my work!</SectionHeading>
          <div className="flex mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={20} pauseOnHover className='py-4'>
            {testimonials.map((item, idx) => (
              <TestimonialCard key={idx} {...item} />
            ))}
        </Marquee>
          </div>
    </div>
  )
}

export default Testimonials

const TestimonialCard = ({ quote, name, avatar }: Testimonial) => {
  return (
    <div className='flex flex-col gap-4 justify-between shadow-aceternity p-4 w-full h-52 max-w-60 rounded-xl mx-4 hover:shadow-md transition-all duration-300'>
      <p className='text-sm text-neutral-700'>{quote}</p>
      <div className='flex items-center gap-4'>
        <img src={avatar} alt={name} className='size-4 rounded-full object-cover' />
        <p className='text-sm text-neutral-500'>{name}</p>
      </div>
    </div>
  )
}