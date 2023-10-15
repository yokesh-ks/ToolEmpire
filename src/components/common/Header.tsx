import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

import { Button } from '../ui/button'
import { ModeToggle } from './mode-toggle'

export const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <nav className='border-b flex flex-col sm:flex-row items-start sm:items-center fixed w-full z-20 bg-background px-6'>
      <div className='py-3 flex flex-1 items-center'>
        <Link href='/' className='mr-5 flex items-center' passHref>
          <p className={`ml-2 mr-4 text-lg font-semibold`}>Tool Empire</p>
        </Link>
        <Link
          href='/'
          className={`mr-5 text-sm ${pathname !== '/' && 'opacity-50'}`}
          passHref
        >
          <p>Home</p>
        </Link>
        <Link
          href='/font-wise'
          className={`mr-5 text-sm ${
            pathname !== '/font-wise' && 'opacity-60'
          }`}
          passHref
        >
          <p>Fontwise</p>
        </Link>
        <Link
          href='/code-glow'
          className={`mr-5 text-sm ${
            pathname !== '/code-glow' && 'opacity-60'
          }`}
          passHref
        >
          <p>CodeGlow</p>
        </Link>
        <Link
          href='/readme-generator'
          className={`mr-5 text-sm ${
            pathname !== '/readme-generator' && 'opacity-60'
          } `}
          passHref
        >
          <p>ReadmeMagic</p>
        </Link>
        {/* <Link
          href="/color-magic"
          className={`mr-5 text-sm ${
            pathname !== "/font-wise" && "opacity-60"
          }`}
          passHref
        >
          <p>Color Magic</p>
        </Link> */}
      </div>
      <div
        className='flex sm:items-center pb-3 sm:p-0 gap-4
      '
      >
        <Button variant='outline' onClick={() => router.push('/contact')}>
          Feedback
        </Button>
        <ModeToggle />
      </div>
    </nav>
  )
}
