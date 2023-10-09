import Button from "@/components/Button"
import { useForm, ValidationError } from "@formspree/react"

type TForm = {
  title?: string
  subtitle?: string
  thankYouMessage?: string
}

function Form({ subtitle, title, thankYouMessage }: TForm) {
  const [state, handleSubmit] = useForm("mzblybdv")

  const labelClass = "text-white text-xl font-light md:text-3xl"

  return (
    <section id="rsvp" className="bg-jes-green">
      <div className="container mx-auto flex min-h-[20rem] max-w-[820px] flex-col justify-center px-4 py-16 text-lg">
        {state.succeeded ? (
          <p className="text-center text-lg text-white md:text-3xl">{thankYouMessage || "Thank you!"}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            {title && (
              <h2 className="mb-4 text-center text-5xl font-light tracking-wide text-white lg:text-9xl">{title}</h2>
            )}

            {subtitle && (
              <p className="mb-8 text-center text-xl font-thin italic text-white md:mb-16 md:text-3xl">{subtitle}</p>
            )}

            <label className={labelClass} htmlFor="name">
              Name(s)
            </label>
            <input id="name" type="text" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label className={labelClass} htmlFor="attending">
              Will you be attending?
            </label>
            <input id="attending" type="text" name="attending" required />
            <ValidationError prefix="attending" field="attending" errors={state.errors} />

            <label className={labelClass} htmlFor="message">
              Please write your food menu choices{" "}
              <span className="inline-block text-lg md:text-2xl">(daytime guests only)</span>
            </label>

            <div className="relative mb-8 flex h-52 flex-col overflow-hidden rounded-[2rem] bg-white md:h-72 lg:h-96 lg:rounded-[4rem]">
              <textarea id="message" name="message" className="mb-0 flex-1 rounded-none p-5 focus:outline-none" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <p className="bg-2 bottom-0 w-full p-2 text-center text-sm text-jes-green lg:p-4 lg:text-2xl">
                Please let us know if you have any allergies
              </p>
            </div>

            <label className={labelClass} htmlFor="song">
              Please request a song
            </label>
            <input id="song" type="text" name="song" required />
            <ValidationError prefix="song" field="song" errors={state.errors} />

            <Button
              type="submit"
              disabled={state.submitting}
              className="hover:bg-jes mx-auto block text-2xl font-bold uppercase tracking-wide text-white transition-all md:text-3xl"
            >
              Submit
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Form
