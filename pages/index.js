import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foodcompass</title>
        <meta name="description" content="The only thing you need to make menu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>This header should go to layout</header>

      <main className={styles.main}>
        Code goes here
      </main>

      <footer className={styles.footer}>
        This footer should go to layout
      </footer>
    </div>
  )
}
