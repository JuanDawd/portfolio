import { Link, useLocation } from 'react-router-dom'

import type { CustomLinkProps } from './Navbar.types'

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
  const { pathname } = useLocation()
  return (
    <Link to={href} className={`${className} group relative`}>
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[2px] bg-accent transition-all duration-300 group-hover:w-full ${
          pathname === href ? 'w-full' : 'w-0'
        } `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default CustomLink
