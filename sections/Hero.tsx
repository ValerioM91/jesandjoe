import Image from "next/image"

type THero = {
  firstPersonName: string
  secondPersonName: string
  date?: string
  when?: string
  where?: string
}

const Hero = ({ firstPersonName, secondPersonName, date, when, where }: THero) => {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden bg-white px-4 pb-12 pt-20 md:py-32 lg:pt-40"
    >
      <Image
        src="/assets/Eucalyptus.png"
        alt=""
        className="absolute right-0 top-5 w-[30%] max-w-md sm:top-0 md:-top-2 lg:-top-4 xl:-top-12"
        width={460}
        height={735}
      />
      <div className="container relative mx-auto max-w-5xl">
        <div>
          <h1 className="flex flex-col text-center text-5xl leading-relaxed tracking-widest sm:text-6xl sm:leading-relaxed md:gap-5 md:text-8xl lg:gap-7 lg:text-9xl">
            <span className="font-batang uppercase">{firstPersonName}</span>
            <span className="font-lavishly">and</span>
            <span className="font-batang uppercase">{secondPersonName}</span>
          </h1>

          {date && (
            <p className="mb-12 mt-6 text-center text-3xl font-light md:mt-12 md:text-5xl lg:mb-28 lg:mt-16">{date}</p>
          )}

          <WhereOrWhen title="When" text={when} />
          <WhereOrWhen title="Where" text={where} />
        </div>
      </div>
    </section>
  )
}

export default Hero

const WhereOrWhen = ({ text, title }: { text?: string; title: "Where" | "When" }) => {
  if (!text) return null

  return (
    <div className="mt-6 text-center lg:mt-12">
      <p className="mb-1 font-semibold uppercase md:text-2xl lg:mb-2 lg:text-4xl">{title}</p>
      <p className="whitespace-pre-wrap font-light md:text-xl lg:text-3xl">{text}</p>
    </div>
  )
}
