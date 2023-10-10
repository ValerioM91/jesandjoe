import Link from "@/components/Link"

type TGifts = {
  title?: string
  content?: string
  link?: string
  linkText?: string
  richText?: string
}

const Gifts = ({ content, title, link, linkText, richText }: TGifts) => {
  return (
    <section className="flex flex-col items-center gap-6 bg-jes-green px-4 py-6 text-white md:py-12 lg:gap-11 lg:py-20">
      {title && <h2 className="px-4 text-center text-3xl font-light md:text-4xl lg:text-8xl">{title}</h2>}
      {content && <p className="whitespace-pre-wrap text-center font-light md:text-xl lg:text-3xl">{content}</p>}
      {link && (
        <Link href={link} className="my-5 font-bold md:text-xl lg:text-3xl" target="_blank" rel="noreferrer">
          {linkText || "Click here to contribute"}
        </Link>
      )}
      {richText && (
        <div
          className="text-center font-light tracking-wide md:text-xl lg:text-3xl [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: richText }}
        />
      )}
    </section>
  )
}

export default Gifts
