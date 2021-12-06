import Image from 'next/image'
import Link from "next/link";
import Container from '@/components/Container'
import { getAllBlogsIds, getBlogsData } from '@/lib/journals'
import Date from '@/components/date'

export default function Journal({ postData }) {
  return (
    <Container>
      <Link href="/journals">
        <a>
          <svg
            className="h-8 w-8 dark:text-white text-gray-500 mb-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </a>
      </Link>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {postData.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Istiak Ahmed"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2 mr-1">
              Istiak Ahmed |
            </p>
            <Date dateString={postData.date} />
          </div>
        </div>
        <div>{/* <Date dateString={postData.date} /> */}</div>
        <div className="prose dark:prose-dark max-w-none w-full">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
        </div>
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const paths = getAllBlogsIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getBlogsData(params.id)
  return {
    props: {
      postData,
    },
  }
}
