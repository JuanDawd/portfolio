import { useLocation, useNavigate } from 'react-router-dom'

import type { CustomMobileLinkProps } from './Navbar.types'

const CustomMobileLink = ({
  href,
  title,
  className = '',
  toggle,
}: CustomMobileLinkProps) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const handleClick = () => {
    toggle()
    setTimeout(() => {
      navigate(href)
    }, 100)
  }
  return (
    <button
      onClick={handleClick}
      className={`${className} group relative my-2`}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[2px] bg-accent transition-all duration-300 group-hover:w-full ${
          pathname === href ? 'w-full' : 'w-0'
        } `}
      >
        &nbsp;
      </span>
    </button>
  )
}

export default CustomMobileLink
