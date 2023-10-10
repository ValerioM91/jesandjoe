type TButton = React.ComponentPropsWithoutRef<"button">

const Button = ({ children, className, type, disabled }: TButton) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={`rounded-full border-[1px] border-current px-8 py-2.5 md:min-w-[9rem] ${
        className ? " " + className : ""
      }`}
    >
      {children}
    </button>
  )
}

export default Button
