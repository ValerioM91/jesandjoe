const LINKS = [
  { link: "#home", label: "Home", delay: " delay-300" },
  { link: "#event", label: "Event", delay: " delay-400" },
  { link: "#info", label: "Information", delay: " delay-500" },
  { link: "#honeymoon", label: "Gifts", delay: " delay-600" },
]

const MenuLinks = ({
  onClick,
  linkClass,
  isOpen,
}: {
  onClick?: () => void
  linkClass?: string
  isMobile?: boolean
  isOpen?: boolean
}) => {
  return (
    <>
      {LINKS.map(({ link, label, delay }) => {
        const beforeCloseClassName = linkClass
        const beforeOpenClassName = linkClass + ` ${delay}`

        return (
          <li key={link}>
            <a href={link} onClick={onClick} className={isOpen ? beforeOpenClassName : beforeCloseClassName}>
              {label}
            </a>
          </li>
        )
      })}
    </>
  )
}

export default MenuLinks
