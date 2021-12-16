import Link from 'next/link'
import BlogCard from './BlogCard'

const BlogSections = ({ title, summary, slug }) => {
  return (
    <section>
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-pink-600 mb-3">
        Journals
      </h2>
      <p className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-10">
        Sometimes I write my thoughts
      </p>
      <BlogCard
        title="An Overview of minting NFT"
        summary="An overview of the NFT (Non Fungible Token), How it is made and what libraries should you know to mint a NFT'"
        slug="an-overview-of-minting-NFT"
        date="2021-12-16"
      />
      <BlogCard
        title="Why CS Graduates find Programming hard?"
        summary="The strugle to write code of a computer science graduate."
        slug="why-cs-graduates-find-programming-hard"
        date="2021-11-15"
      />
    </section>
  )
}

export default BlogSections
