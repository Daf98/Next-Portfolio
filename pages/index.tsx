import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { pageInfo, Project, Skill, Social } from '../typings'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchPageInfo } from '../utils/getPageInfo'
import { fetchProjects } from '../utils/getProjects'

type Props = {
  pageInfo: pageInfo,
  skills: Skill[],
  projects: Project[],
  socials: Social[],
}

export default function Home({ pageInfo, projects, skills, socials }: Props) {
  return (
    <div className="bg-[#0a192f] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5ceacd]/80">
      <Head>
        <title>Daf's Portfolio</title>
        <link rel="icon" href="./images/favicon.ico" />
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo = {pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo = {pageInfo} />
      </section>
      <section id="skills" className="snap-center">
        <Skills skills = {skills} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: pageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials
    },
    revalidate: 10,
  }
}