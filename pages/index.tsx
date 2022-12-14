import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="bg-[#0a192f] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Daf's Portfolio</title>
        <link rel="icon" href="./images/favicon.ico" />
      </Head>
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      {/* Experiences */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}
