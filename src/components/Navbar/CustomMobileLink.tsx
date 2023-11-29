'use client'

import { usePathname, useRouter } from 'next/navigation'

const CustomMobileLink = ({
  href,
  title,
  className = '',
  toggle,
}: {
  href: string
  title: string
  className?: string
  toggle: () => void
}) => {
  const pathname = usePathname()
  const router = useRouter()
  const handleClick = () => {
    toggle()
    setTimeout(() => {
      router.push(href)
    }, 100)
  }
  return (
    <button
      onClick={handleClick}
      className={`${className} group relative my-2`}
    >
      {title}
      {/* Change the BG here with the accent color later*/}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[2px] bg-accent transition-[width] duration-300 group-hover:w-full ${
          pathname === href ? 'w-full' : 'w-0'
        } `}
      >
        &nbsp;
      </span>
    </button>
  )
}

export default CustomMobileLink
