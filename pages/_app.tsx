import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter, Lavishly_Yours } from "next/font/google"
import localFont from "next/font/local"

const batang = localFont({
  src: "../public/assets/batangLight.woff2",
  variable: "--batang",
  display: "swap",
})

const inter = Inter({ subsets: ["latin"], variable: "--inter" })

const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--lavishly",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${batang.variable} ${lavishly.variable} font-inter`} suppressHydrationWarning>
      <Component {...pageProps} />
    </main>
  )
}
