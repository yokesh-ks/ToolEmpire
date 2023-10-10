import Head from 'next/head'
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
  // {
  //   title: "PDF to WORD",
  //   description: "Transform Your PDFs into Word Docs in a Snap",
  //   iconName: "",
  //   routeName: "pdf-to-word",
  // },
]

function index() {
  return (
    <div>
      <Head>
        <title>ToolEmpire</title>
        <meta name='description' content='Tools' />
      </Head>
      <Hero />
      <ListTools data={data} />
    </div>
  )
}

export default index
