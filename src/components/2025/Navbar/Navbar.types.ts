export type CustomLinkProps = {
  href: string
  title: string
  className?: string
}

export type CustomMobileLinkProps = {
  href: string
  title: string
  className?: string
  toggle: () => void
}

export type MobileNavbarProps = { handleClick: () => void }
