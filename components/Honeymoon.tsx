import { useState } from "react"
import Section from "./Section"
import { HoneymoonSVG } from "./Svg"

const Honeymoon = () => {
  const [copyButtonText, setCopyButtonText] = useState<"Copia" | "Copiato">("Copia")

  return (
    <Section
      id="honeymoon"
      sectionClasses="bg-white my-16 md:mb-10 md:my-20 lg:my-24"
      className="container mx-auto max-w-7xl px-4"
    >
      <HoneymoonSVG className="text-salvia mx-auto mb-2 h-20 w-20 md:mb-8" />

      <p className="mb-4">Grazie di esserci 😊</p>
      <p>Se vi va, potete contribuire alla nostra avventura in Oriente cliccando il link qui sotto 🇯🇵🇰🇷</p>

      <div className="flex flex-col items-center">
        <a
          href="https://revolut.me/valeriom91"
          target="_blank"
          className="text-salvia hover:bg-jes-greenChiaro my-6 inline-block rounded-full border-2 border-current px-8 py-2.5 tracking-wide transition-all md:min-w-[9rem]"
        >
          Fondo luna di miele
        </a>

        <p className="mb-8">In alternativa, qui ci sono le nostre coordinate bancarie:</p>
        <p className="mb-2">Valerio Mattera</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <p>IT30B0306939932100000003272</p>
          <button
            className="text-salvia hover:bg-jes-greenChiaro inline-block min-w-[5.5rem] rounded-full border-2 border-current px-4 py-2 text-sm tracking-wide transition-all"
            onClick={() => {
              navigator.clipboard.writeText("IT30B0306939932100000003272")
              setCopyButtonText("Copiato")
              setTimeout(() => {
                setCopyButtonText("Copia")
              }, 1500)
            }}
          >
            {copyButtonText}
          </button>
        </div>
      </div>
    </Section>
  )
}

export default Honeymoon
