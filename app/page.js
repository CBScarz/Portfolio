import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
