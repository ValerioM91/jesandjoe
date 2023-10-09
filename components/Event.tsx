import Image from "next/image"
import Link from "./Link"
import Section from "./Section"

const EventDate = new Date("2023-06-03T00:00:00.000Z").getTime()

const Event = () => {
  const today = new Date().getTime()
  const daysToTheEvent = Math.ceil((EventDate - today) / (1000 * 3600 * 24))

  return (
    <Section id="event" className="mb-16 lg:mb-24 lg:pt-8" sectionClasses="bg-white">
      {daysToTheEvent >= 0 && (
        <div className="text-salvia font-regular mb-14 text-2xl uppercase">
          {daysToTheEvent >= 1 ? `${daysToTheEvent} Giorni all'evento` : "Vi aspettiamo!"}
        </div>
      )}

      <Item question="Quando" content="3 giugno, ore 16:00" />
      <Item
        question="Dove"
        content="Botania Relais & Spa, Via Provinciale Lacco - Fango, 284, 80075 Forio NA, Italia"
      />

      <p className="mb-5 text-xl font-thin">Ci sarai?</p>
      <Link href="#rsvp" className="text-salvia hover:bg-jes-greenChiaro tracking-widest transition-all">
        RSVP
      </Link>

      <Image src="/assets/Wildflowers.jpg" alt="" width={150} height={20} className="mx-auto mt-16" />
    </Section>
  )
}

const Item = ({ question, content }: { question: string; content: string }) => {
  return (
    <div className="mb-10 font-thin">
      <div className="text-2xl after:mx-auto after:my-2 after:block after:h-[3px] after:w-16 after:bg-jes-green after:content-['']">
        {question}
      </div>
      <p className="font-cormorant-garamond md:text-xl">{content}</p>
    </div>
  )
}

export default Event
