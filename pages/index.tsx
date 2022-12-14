import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="bg-[#0a192f] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5ceacd]/80">
      <Head>
        <title>Daf's Portfolio</title>
        <link rel="icon" href="./images/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  )
}
