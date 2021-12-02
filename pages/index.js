import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from '@/components/Container'
import ProjectCard from '@/components/ProjectCard'
import ProjectsSection from '@/components/ProjectSections'
import SeeMore from '@/components/SeeMore'
import BlogCard from '@/components/BlogCard'
import BlogSections from '@/components/BlogSections'
import ImageSection from '@/components/ImageSection'

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
        <SeeMore />
        <BlogSections />
        <SeeMore />
        <ImageSection />
      </div>
    </Container>
  )
}
