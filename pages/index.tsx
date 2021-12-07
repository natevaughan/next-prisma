import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Edge function demo</title>
        <meta name="description" content="demo of next.js edge function with prisma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Messages
        </h1>
      </main>
      <footer>
          Powered by my brain
      </footer>
    </div>
  )
}

export default Home
