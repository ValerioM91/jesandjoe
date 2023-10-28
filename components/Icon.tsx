import * as SVGS from "./Svgs"

export type IconProps = React.ComponentPropsWithoutRef<"div"> & {
  icon: keyof typeof SVGS
  text: string
  color: "text-white" | "text-jes-green"
}

const Icon = ({ icon, text, color, className, ...rest }: IconProps) => {
  if (!icon) return null

  const Svg = SVGS[icon]

  return (
    <div className={`text-center ${color} w-auto ${className}`} {...rest}>
      <Svg className="mx-auto mb-2 h-20 w-20 md:mb-8" />
      <p className="whitespace-pre-line leading-snug">{text}</p>
    </div>
  )
}

export default Icon

export const iconNames = Object.keys(SVGS) as (keyof typeof SVGS)[]
