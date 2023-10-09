import Section from './Section'

const Map = () => {
  return (
    <Section id="map" sectionClasses="bg-white md:my-24 lg:my-32 px-0" className="max-md:px-0">
      <iframe
        className="md:rounded-md"
        title="Glenmorangie map"
        width="100%"
        height="600"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Botania Relais & Spa, Via Provinciale Lacco - Fango, 284, 80075 Forio NA, Italia&t=&z=15&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </Section>
  )
}

export default Map
