'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CustomLinkProps } from './Navbar.types'

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
  const pathname = usePathname()
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      {/* Change the BG here with the accent color later*/}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[2px] bg-accent transition-[width] duration-300 group-hover:w-full ${
          pathname === href ? 'w-full' : 'w-0'
        } `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default CustomLink
