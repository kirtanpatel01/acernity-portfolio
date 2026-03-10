import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconProps } from '@tabler/icons-react';
import React from 'react';

export type Social = {
  name: string;
  href: string;
  icon: React.ElementType;
};

export const socials: Social[] = [
  {
    name: "X",
    href: "https://x.com/kjpatel_dev",
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kjpatel-dev",
    icon: IconBrandLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/kirtanptel01",
    icon: IconBrandGithub,
  },
];
