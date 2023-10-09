import Section from './Section'

const GettingThere = () => {
  return (
    <Section
      id="getting-there"
      sectionClasses="bg-rosa text-verde"
      className="py-16 md:pb-10 md:py-20 lg:py-24"
    >
      <div className="font-thin max-w-xl mx-auto ">
        <div className="mb-3 text-xl font-medium tracking-wider">PERNOTTAMENTO</div>
        <p className="mb-6">
          Per gli invitati che arrivano dalla terraferma. Gli sposi sono felici di ospitarvi presso
          il “Residence Paco” per due notti, dal 2/06 al 4/06. Qui potrete usufruire di due
          bellissime piscine termali con idromassaggio e bagno turco (dalle 9,30 alle 19,30). WiFi
          gratuito.
        </p>
        <a
          className="underline-offset-4 underline font-medium"
          target="_blank"
          href="https://goo.gl/maps/gKxNwb5Lmcpg9c949"
        >
          Paco Residence
          <br />
          Via Cesa, 41, 80075 Forio NA
        </a>

        <div className="mb-3 text-xl font-medium mt-14 tracking-wider">TRASPORTI</div>
        <p>
          Organizzeremo un transfer dal Residence alla location, dettagli ancora da definire! Stay
          tuned 😊
        </p>
      </div>
    </Section>
  )
}

export default GettingThere
