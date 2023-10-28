import Icon, { type IconProps } from "@/components/Icon"

type TIcons = {
  attributes?: Attributes
  title?: string
  icons?: IconProps[]
  background: "white" | "green"
}

const Icons = ({ title, icons, background = "white", attributes }: TIcons) => {
  const colors: { icon: "text-white" | "text-jes-green"; background: "bg-white" | "bg-jes-green" } = {
    icon: background === "green" ? "text-white" : "text-jes-green",
    background: background === "white" ? "bg-white" : "bg-jes-green",
  }

  const oddsIcons = icons && icons.length % 2 === 1

  return (
    <section {...attributes} className={`p mt-16 ${colors.background}`}>
      <div
        className={`container mx-auto max-w-3xl px-4 ${
          background === "green" ? "py-4 md:py-8 lg:py-16" : "py-2 md:py-6 lg:py-12"
        }`}
      >
        {title && (
          <h2 className={`${colors.icon} mb-4 text-center text-3xl font-light md:text-4xl lg:mb-10 lg:text-7xl`}>
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 md:grid-cols-3">
          {icons?.map((icon: IconProps, i) => (
            <Icon
              key={i}
              icon={icon.icon}
              text={icon.text}
              color={colors.icon}
              className={i === icons.length - 1 && oddsIcons ? "col-span-2 md:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Icons
