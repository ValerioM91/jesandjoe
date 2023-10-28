const Map = ({ location, attributes }: { location: string; attributes?: Attributes }) => {
  return (
    <section {...attributes} id="map" className="bg-white px-0">
      <div className="container mx-auto max-w-5xl px-4 text-center text-lg max-md:px-0">
        <iframe
          className="md:rounded-md"
          width="100%"
          height="600"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${location}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
      </div>
    </section>
  )
}

export default Map
