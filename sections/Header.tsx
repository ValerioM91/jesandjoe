import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import IconButton from "../components/IconButton"
import Link from "../components/Link"
import MenuLinks from "../components/MenuLinks"
import MobileMenu from "../components/MobileMenu"
import type { TLink } from "@/types"

const Header = ({ sectionsNames, className }: { sectionsNames?: (string | undefined)[]; className?: string }) => {
  const links: TLink[] = []

  if (sectionsNames?.includes("Hero")) {
    links.push({ link: "#hero", label: "Home", delay: " delay-300" })
  }
  if (sectionsNames?.includes("Where")) {
    links.push({ link: "#where", label: "Event", delay: " delay-400" })
  }
  if (sectionsNames?.includes("Rich Text Section")) {
    links.push({ link: "#info", label: "Information", delay: " delay-500" })
  }
  if (sectionsNames?.includes("Gifts")) {
    links.push({ link: "#gifts", label: "Gifts", delay: " delay-600" })
  }

  const showRsvp = sectionsNames?.includes("Form")

  return (
    <header className={`fixed top-0 z-10 flex w-full bg-jes-green px-4 font-inter shadow-md ${className}`}>
      <nav className="container m-auto max-w-5xl py-3 md:py-4">
        <Mobile links={links} showRsvp={showRsvp} />
        <Desktop links={links} showRsvp={showRsvp} />
      </nav>
    </header>
  )
}

const Rsvp = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link
      onClick={onClick}
      href="#rsvp"
      className="font-medium tracking-ultra-wide text-white transition-all hover:bg-jes-green"
    >
      RSVP
    </Link>
  )
}

const Desktop = ({ links, showRsvp }: { links?: TLink[]; showRsvp?: boolean }) => {
  return (
    <ul className="hidden items-center justify-between text-white md:flex">
      {showRsvp && (
        <li>
          <Rsvp />
        </li>
      )}
      <MenuLinks linkClass="py-2 pl-2" links={links} />
    </ul>
  )
}

const Mobile = ({ links, showRsvp }: { links?: TLink[]; showRsvp?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ul className="relative z-20 flex items-center justify-between bg-jes-green md:hidden">
        {showRsvp && <Rsvp onClick={handleCloseMenu} />}
        <IconButton className="text-white" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu />
        </IconButton>
      </ul>
      <MobileMenu isOpen={isOpen} onClose={handleCloseMenu} links={links} />
    </>
  )
}

export default Header
