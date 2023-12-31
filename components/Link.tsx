import { twMerge } from "tailwind-merge"

type TLink = React.ComponentPropsWithoutRef<"a">

const Link = ({ children, className, href, onClick, ...rest }: TLink) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={twMerge(
        "inline-block rounded-full border-[1px] border-current px-8 py-2.5 text-center md:min-w-[9rem]",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link
