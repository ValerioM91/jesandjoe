type TRichTextSection = {
  title?: string
  richText?: string
  id?: string
  attributes?: Attributes
}

const RichTextSection = ({ title, richText, id, attributes }: TRichTextSection) => {
  return (
    <section {...attributes} id={id} className="my-8 flex flex-col gap-6 px-4 md:my-12 lg:my-16 lg:gap-8">
      {title && <h2 className="text-center text-3xl font-light md:text-4xl lg:mb-4 lg:text-7xl">{title}</h2>}
      {richText && (
        <div
          className="mx-auto max-w-4xl text-center font-light tracking-wide md:text-xl lg:text-2xl [&_a]:text-jes-green [&_a]:underline [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: richText }}
        />
      )}
    </section>
  )
}

export default RichTextSection
