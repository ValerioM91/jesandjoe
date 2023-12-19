import Image from "next/image"

type TWhere = {
  title?: string
  image?: string
  where?: string
  attributes?: Attributes
}

const Where = ({ image, title, where, attributes }: TWhere) => {
  return (
    <section {...attributes} id="where" className="flex flex-col gap-6 py-6 md:py-12 lg:gap-11 lg:py-20">
      {title && <h2 className="px-4 text-center text-2xl font-light md:text-4xl lg:text-7xl">{title}</h2>}
      {image && (
        <Image
          src={image}
          alt=""
          className="w-full"
          width={1300}
          height={420}
          sizes="(max-width: 450px) 450px, (max-width: 768px) 768px, 100vw"
        />
      )}
      {where && <p className="whitespace-pre-line px-4 text-center font-light md:text-2xl lg:text-4xl">{where}</p>}
    </section>
  )
}

export default Where
