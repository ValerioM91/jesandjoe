type TRichTextSection = {
  title?: string
  richText?: string
  id?: string
}

const RichTextSection = ({ title, richText, id }: TRichTextSection) => {
  return (
    <section id={id} className="flex flex-col gap-6 px-4 py-8 md:py-12 lg:gap-11 lg:py-20">
      {title && <h2 className="text-center text-3xl font-light md:text-4xl lg:mb-8 lg:text-8xl">{title}</h2>}
      {richText && (
        <div
          className="mx-auto max-w-5xl text-center font-light tracking-wide md:text-xl lg:text-3xl [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: richText }}
        />
      )}
    </section>
  )
}

export default RichTextSection
