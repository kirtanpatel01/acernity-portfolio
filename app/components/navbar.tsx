'use client'

import Container from './container'
import Image from 'next/image'
import { useState } from "react";
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

function Navbar() {
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ]

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width: scrolled ? "34.5%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "linear"
        }}
        className="fixed inset-x-0 top-0 mx-auto max-w-4xl flex items-center justify-between p-2 rounded-full bg-white dark:bg-black"
      >
        <Link href="/">
          <Image
          src={"/cool.jpg"}
          alt={"cool"}
          height={68}
          width={68}
          className='h-10 w-10 rounded-full'
        />
        </Link>

        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm relative px-2 py-1"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId='hovered-span'
                  className='absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800'
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  )
}

export default Navbar