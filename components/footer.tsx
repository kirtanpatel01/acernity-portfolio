import Link from 'next/link'
import React from 'react'
import Container from './container'
import { socials } from '@/constants/socials'

function Footer() {
  return (
    <Container className='flex justify-between border-t border-neutral-100 px-4 py-3'>
      <p className='text-xs text-neutral-500'>Built with ❤️ by Kirtan Patel</p>
      <div className='flex items-center justify-center gap-4'>
        {socials.map((social) => (
          <Link key={social.name} href={social.href}>
            <social.icon className='size-4 text-neutral-500 hover:text-neutral-700' />
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Footer