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
        title='JSON Wizard: Tame the Data Chaos'
        description='Introducing the JSON Formatter by ToolEmpire - your go-to tool for organizing and beautifying messy JSON data. Take control and present your data with clarity and precision.'
        buttonLabel='Get Started'
        handleButtonCLick={() => router.push('/json-formatter/editor')}
      />
    </div>
  )
}

export default Home
