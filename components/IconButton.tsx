type TIconButton = React.ComponentPropsWithoutRef<"button">

const IconButton = ({ children, className, onClick }: TIconButton) => {
  return (
    <button onClick={onClick} className={`text-3xl ${className ? " " + className : ""}`}>
      {children}
    </button>
  )
}

export default IconButton
