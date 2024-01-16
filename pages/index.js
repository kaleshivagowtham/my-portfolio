import Head from 'next/head'
import HomeComponent from '../src/Components/HomeComponent'

export default function Home() {

  return (
      <div>
        <Head>
          <title>Shiva Gowtham Kale</title>
          <link rel="icon" href="/myImg.jpg" />
        </Head>
        <HomeComponent />
      </div>
  )
}