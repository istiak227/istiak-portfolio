import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
