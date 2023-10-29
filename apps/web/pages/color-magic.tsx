import Head from 'next/head'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Hex2Rgb, Hex2Rgba, Random, Rgba2Hex } from '@/container'

const data = [
  { title: 'Hex to RGBA', fieldKey: 'hex2rgba' },
  { title: 'RGBA to Hex', fieldKey: 'rgba2hex' },
  { title: 'Random Color', fieldKey: 'random' },
  { title: 'Hex to RGB', fieldKey: 'hex2rgb' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('hex2rgba')

  const handleConvertor = (convertor) => {
    switch (convertor) {
      case 'hex2rgba':
        return <Hex2Rgba />
      case 'hex2rgb':
        return <Hex2Rgb />
      case 'rgba2hex':
        return <Rgba2Hex />
      case 'random':
        return <Random />
      default:
        return null
    }
  }

  return (
    <div>
      <Head>
        <title>ToolEmpire | ColorMagic</title>
        <meta name='description' content='Tools' />
      </Head>
      <div style={{ display: 'flex', height: '100%', width: '100%', flex: 1 }}>
        <RightSection>
          {data.map((item) => (
            <TabName
              key={item?.fieldKey}
              active={item?.fieldKey === activeTab}
              onClick={() => setActiveTab(item?.fieldKey)}
            >
              {item?.title}
            </TabName>
          ))}
        </RightSection>
        {handleConvertor(activeTab)}
      </div>
    </div>
  )
}

const RightSection = styled.div`
  width: 360px;
`

const TabName = styled.h3`
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
`

export async function getServerSideProps(ctx) {
  return {
    redirect: {
      permanent: false,
      destination: '/404',
    },
  }
}
