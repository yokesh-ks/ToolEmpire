import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

import { Header } from '@/components/common/Header'
import { ThemeProvider } from '@/components/common/providers'
import { Meta } from '@/components/meta'
import { Toaster } from '@/components/ui/toaster'

import '../src/styles/index.css'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Meta />
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <Header />
        <Component {...pageProps} />
        <Toaster />
        <Analytics />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
