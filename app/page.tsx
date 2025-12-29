import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import About from "@/components/about"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Pricing />
      <Contact />
    </main>
  )
}
