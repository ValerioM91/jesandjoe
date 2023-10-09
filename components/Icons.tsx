import Section from './Section'
import { CocktailSVG, DinnerSVG, PartySVG, RingsSVG } from './Svg'

type IconProps = {
  Svg: typeof CocktailSVG
  text: string
}

const Icon = ({ Svg, text }: IconProps) => {
  return (
    <div className="text-center">
      <Svg className="w-20 h-20 text-salvia mx-auto mb-2 md:mb-8" />
      {text}
    </div>
  )
}

const Icons = () => {
  return (
    <Section
      id="icons"
      sectionClasses="bg-white my-16 md:my-24 lg:my-32 2xl:my-40"
      className="container max-w-7xl mx-auto px-4"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mb-10 md:mb-16 ">
        <Icon Svg={RingsSVG} text="Cerimonia presso l'anfiteatro" />
        <Icon Svg={CocktailSVG} text="Aperitivo al Bar della Grotta" />
        <Icon Svg={DinnerSVG} text="Cena al Corbezzolo" />
        <Icon Svg={PartySVG} text="Open bar e Live Music con i Purple Project" />
      </div>

      <p className="text-center font-thin md:text-lg italic">
        Il matrimonio si svolgerà interamente al Botania Relais & Spa
      </p>
    </Section>
  )
}

export default Icons
