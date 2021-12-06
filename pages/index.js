import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Container from '@/components/Container'
import ProjectCard from '@/components/ProjectCard'
import ProjectsSection from '@/components/ProjectSections'
import SeeMore from '@/components/SeeMore'
import BlogCard from '@/components/BlogCard'
import BlogSections from '@/components/BlogSections'
import ImageSection from '@/components/ImageSection'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <Container
      title="Istiak Ahmed"
      description="Istiak Ahmed's personal portfolio website"
    >
      <h1 className="text-primary font-extrabold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Istiak Ahmed
      </h1>
      <h2 className="text-black dark:text-gray-200 mb-10 mt-4 prose-lg tracking-wide leading-loose">
        A software engineer, entrapruner and a learner. Founded a tech
        enthusiast hub called Traideas. Loves talking about startups and tech.
        Know more about Istiak{' '}
        <Link href="/about">
          <a className="text-green-500">
            here.
          </a>
        </Link>
      </h2>
      <ProjectsSection />
      <SeeMore route={'projects'} />
      <BlogSections />
      <SeeMore route={'journals'} />
      {/* <ImageSection /> */}
      <Contact />
    </Container>
  )
}
