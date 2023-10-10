import type { TLink } from "@/types"

const MenuLinks = ({
  onClick,
  linkClass,
  isOpen,
  links,
}: {
  onClick?: () => void
  links?: TLink[]
  linkClass?: string
  isMobile?: boolean
  isOpen?: boolean
}) => {
  return (
    <>
      {links?.map(({ link, label, delay }) => {
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
