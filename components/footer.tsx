import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import Container from './container'

function Footer() {
  return (
    <Container className='flex justify-between border-t border-neutral-100 px-4 py-3'>
      <p className='text-xs text-neutral-500'>Built with ❤️ by Kirtan Patel</p>
      <div className='flex items-center justify-center gap-4'>
        <Link href={"https://x.com/kjpatel_dev"}>
          <IconBrandX className='size-4 text-neutral-500 hover:text-neutral-700' />
        </Link>
        <Link href={"https://linkedin.com/in/kjpatel-dev"}>
          <IconBrandLinkedin className='size-4 text-neutral-500 hover:text-neutral-700' />
        </Link>
        <Link href={"https://github.com/kirtanptel01"}>
          <IconBrandGithub className='size-4 text-neutral-500 hover:text-neutral-700' />
        </Link>
      </div>
    </Container>
  )
}

export default Footer