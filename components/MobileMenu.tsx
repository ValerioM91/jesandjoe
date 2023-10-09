import MenuLinks from "./MenuLinks"

const MobileMenu = ({ isOpen, onClose }: { isOpen?: boolean; onClose: () => void }) => {
  return (
    <div
      className={`fixed transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full "
      } left-0 top-0 z-10 h-full w-full bg-jes-green px-4 py-20 text-3xl leading-relaxed text-white`}
    >
      <nav className="h-full">
        <ul className="flex h-full flex-col justify-center text-center">
          <MenuLinks
            onClick={onClose}
            isMobile
            isOpen={isOpen}
            linkClass={`my-4 inline-block font-thin transition-opacity duration-200 ${
              isOpen ? "opacity-1 duration-0" : "opacity-0"
            }`}
          />
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu
