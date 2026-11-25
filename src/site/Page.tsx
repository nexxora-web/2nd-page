import { Footer } from './Footer'
import { Hero } from './Hero'
import { Nav } from './Nav'
import { Contact, Faq, Offer, Pricing, Problems, Process, Works } from './sections'

export function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-fern focus:px-4 focus:py-2 focus:text-[13px] focus:font-bold focus:text-cream"
      >
        本文へスキップ
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Problems />
        <Works />
        <Pricing />
        <Process />
        <Offer />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
