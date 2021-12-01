import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from '@/components/Container'
import ProjectCard from '@/components/ProjectCard'
import ProjectsSection from '@/components/ProjectSections'

export default function Home() {
  return (
    <Container
      title="Istiak Ahmed"
      description="Istiak Ahmed's personal portfolio website"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Istiak Ahmed
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-loose">
          A software engineer, entrapruner and a learner. Founded a tech
          enthusiast hub called Traideas.
        </h2>
        <ProjectsSection />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Recent Works
        </h3>
        <ProjectCard
          title="Tailwind Master Kit"
          description="Beautiful, Handcrafted, wind web app project."
          href="https://tailwindmasterkit.com/"
          icon="tailwindmasterkit"
          tags={['Tailwind', 'Next.js', 'Freemium']}
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Blogs
        </h3>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          World through my lense
        </h3>
      </div>
    </Container>
  )
}
