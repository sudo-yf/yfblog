import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "Yifan's Blog",
  description:
    '19y/o @SCUT | bedroom pop enthusiast | icyball',
  href: 'https://sudo-yf.github.io',
  author: 'yifan',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/work',
    label: 'Work',
  },
  {
    href: '/about',
    label: 'About',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/sudo-yf',
    label: 'GitHub',
  },
  {
    href: 'mailto:shiyi2006@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
