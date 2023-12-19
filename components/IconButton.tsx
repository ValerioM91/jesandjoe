import { twMerge } from "tailwind-merge"

type TIconButton = React.ComponentPropsWithoutRef<"button">

const IconButton = ({ children, className, onClick, ...rest }: TIconButton) => {
  return (
    <button onClick={onClick} className={twMerge("text-3xl", className)} {...rest}>
      {children}
    </button>
  )
}

export default IconButton
