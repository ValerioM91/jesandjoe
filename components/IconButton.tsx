import type { MouseEventHandler } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const IconButton = ({ children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`text-3xl ${className ? ' ' + className : ''}`}>
      {children}
    </button>
  )
}

export default IconButton
