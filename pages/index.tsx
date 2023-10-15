import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { Hero } from '@/container/home/HeroSection'
import ListTools from '@/container/home/ListTools'

const data = [
  // {
  //   title: "Color Magic",
  //   description: "Convert Colors with Ease",
  //   iconName: "",
  //   routeName: "color-magic",
  // },
  {
    title: 'FontWise',
    description: 'Responsive Font Calculator for Modern Web Design',
    iconName: '',
    routeName: 'font-wise',
  },
  {
    title: 'Code Glow',
    description: 'Illuminate Your Code, Captivate Your Audience',
    iconName: '',
    routeName: 'code-glow',
  },
  {
    title: 'Readme Magic',
    description: 'Your Blueprint for Perfect Documentation!',
    iconName: '',
    routeName: 'readme-generator',
  },
  // {
  //   title: "PDF to WORD",
  //   description: "Transform Your PDFs into Word Docs in a Snap",
  //   iconName: "",
  //   routeName: "pdf-to-word",
  // },
]

function Home() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>ToolEmpire</title>
        <meta name='description' content='Tools' />
      </Head>
      <Hero
        title='Innovative tools for empire builders.'
        description="Welcome to a world of innovation and creativity! Discover a
                treasure trove of powerful tools designed to empower empire
                builders like you. Whether you're a designer, marketer,
                developer, or entrepreneur, our site offers an array of
                essential utilities at your fingertips."
        buttonLabel='Start Exploring'
        handleButtonCLick={() => router.push('/font-wise')}
      />
      <ListTools data={data} />
    </div>
  )
}

export default Home
