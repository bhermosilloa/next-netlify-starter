import Head from 'next/head'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="not drinkprime" />
      </main>

      <Footer />
    </div>
  )
}
