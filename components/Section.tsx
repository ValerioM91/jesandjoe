interface Props {
  id: string
  sectionClasses?: string
  className?: string
  children: React.ReactNode
}

const Section = ({ id, sectionClasses, className, children }: Props) => {
  return (
    <section id={id} className={sectionClasses}>
      <div
        className={`container max-w-5xl mx-auto text-center text-lg px-4${
          className ? ' ' + className : ''
        }`}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
