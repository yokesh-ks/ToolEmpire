import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { Hero } from '@/container/home/HeroSection'

function Home() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>ToolEmpire</title>
        <meta name='description' content='Tools' />
      </Head>
      <Hero
        title='README Magic: Your Projects Voice'
        description='At ToolEmpire, we believe in empowering builders by simplifying the complex. Let our Readme Generator be your trusted guide in presenting your projects to the world. Elevate your documentation game and conquer the digital realm with confidence!'
        buttonLabel='Get Started'
        handleButtonCLick={() => router.push('/readme-generator/editor')}
      />
    </div>
  )
}

export default Home
