interface Props {
  children: React.ReactNode
  className?: string
  href: string
  onClick?: () => void
}

const Link = ({ children, className, href, onClick }: Props) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-block text-center px-8 py-2.5 border-2 border-current rounded-full md:min-w-[9rem] ${
        className ? ' ' + className : ''
      }`}
    >
      {children}
    </a>
  )
}

export default Link
