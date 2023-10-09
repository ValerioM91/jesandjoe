import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import IconButton from "../components/IconButton"
import Link from "../components/Link"
import MenuLinks from "../components/MenuLinks"
import MobileMenu from "../components/MobileMenu"

const Header = ({ className }: { className?: string }) => {
  return (
    <header className={`fixed top-0 z-10 flex w-full bg-jes-green px-4 font-inter shadow-md ${className}`}>
      <nav className="container m-auto max-w-5xl py-3 md:py-4">
        <Mobile />
        <Desktop />
      </nav>
    </header>
  )
}

const Rsvp = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link
      onClick={onClick}
      href="#rsvp"
      className="hover:bg-jes-greenScuro font-medium tracking-ultra-wide text-white transition-all"
    >
      RSVP
    </Link>
  )
}

const Desktop = () => {
  return (
    <ul className="hidden items-center justify-between text-white md:flex">
      <li>
        <Rsvp />
      </li>
      <MenuLinks linkClass="py-2 pl-2" />
    </ul>
  )
}

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ul className="relative z-20 flex items-center justify-between bg-jes-green md:hidden">
        <Rsvp onClick={handleCloseMenu} />
        <IconButton className="text-white" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu />
        </IconButton>
      </ul>
      <MobileMenu isOpen={isOpen} onClose={handleCloseMenu} />
    </>
  )
}

export default Header
