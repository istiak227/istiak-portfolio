import Link from 'next/link'
import BlogCard from './BlogCard'

const BlogSections = ({ title, summary, slug }) => {
  return (
    <section className="mb-5">
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-indigo mb-3">
        Blog
      </h2>
      <p className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-10">
        I write stuff sometimes
      </p>
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
  )
}

export default BlogSections
