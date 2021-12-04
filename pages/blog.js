import Container from '@/components/Container'
import BlogCard from '@/components/BlogCard'
import React from 'react'

export default function Blog() {
  return (
    <Container>
      <section>
       {/*  <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-indigo mb-3">
          Blog
        </h2> */}
        <p className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
          Blogs
        </p>
        {/* <p className="text-secondary prose-lg mb-4 dark:text-gray-200">
          I'm a senior full stack engineer with a passion for everything
          front-end. Welcome to my corner of the internet. I'm glad you're here!
        </p> */}
        <h2 className="text-black dark:text-gray-200 mb-10 mt-4 prose-lg tracking-wide leading-loose">
        A software engineer, entrapruner and a learner. Founded a tech
        enthusiast hub called Traideas.
      </h2>
        <BlogCard
          title="Top 5 courses and resources to learn Next JS in 2021"
          summary="Get the top 5 resources to learn Next JS in 2021 and take your React skills to the next level."
          slug="top-5-nextjs-resources"
        />
        <BlogCard
          title="Top 5 courses and resources to learn Next JS in 2021"
          summary="Get the top 5 resources to learn Next JS in 2021 and take your React skills to the next level."
          slug="top-5-nextjs-resources"
        />
        <BlogCard
          title="Top 5 courses and resources to learn Next JS in 2021"
          summary="Get the top 5 resources to learn Next JS in 2021 and take your React skills to the next level."
          slug="top-5-nextjs-resources"
        />
        <BlogCard
          title="Top 5 courses and resources to learn Next JS in 2021"
          summary="Get the top 5 resources to learn Next JS in 2021 and take your React skills to the next level."
          slug="top-5-nextjs-resources"
        />
        {/* <div className="mb-10">
        <Link href="/blogs">
          <div>
            <p className="text-xl lg:text-2xl font-extrabold text-primary">
              Top 5 courses and resources to learn Next JS in 2021
            </p>
            <p className="mt-2 text-secondary prose-lg">
              Get the top 5 resources to learn Next JS in 2021 and take your
              React skills to the next level."
            </p>
          </div>
        </Link>
      </div>
      <div className="mb-10">
        <Link href="/blogs">
          <div>
            <p className="text-xl lg:text-2xl font-extrabold text-primary">
              Top 5 courses and resources to learn Next JS in 2021
            </p>
            <p className="mt-2 text-secondary prose-lg">
              Get the top 5 resources to learn Next JS in 2021 and take your
              React skills to the next level."
            </p>
          </div>
        </Link>
      </div> */}
      </section>
    </Container>
  )
}
