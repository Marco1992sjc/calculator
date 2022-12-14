import Head from 'next/head'
import Image from 'next/image'
import Calculator from './components/Calculator'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Calculadora</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>
          Calculadora feita em Reactjs
        </h1>
<Calculator  />
        
      </main>

      <footer>
     
          Powered by{' '}
          <span >
            <Image src="/imgnobg.png" alt="Marco" width={72} height={72} />
          </span>
        
      </footer>
    </div>
  )
}
