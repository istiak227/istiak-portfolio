import Link from 'next/link'
import Date from './date'

const BlogCard = ({ title, summary, slug, date }) => {
  return (
    <Link href={`/journals/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg blog-heading md:text-xl mb-2 w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="text-gray-500 text-left md:text-right md:w-20 mb-4 md:mb-0">
              <Date dateString={date} />
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogCard
