import { cn } from '@tool-empire/utils'
import Head from 'next/head'
import { Resizable } from 're-resizable'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@tool-empire/components'

import CodeEditor from '@/components/code-glow/code-editor'
import { Control } from '@/components/code-glow/control'
// import { ResetIcon } from "@radix-ui/react-icons";
import WidthMeasurement from '@/components/code-glow/width-measurement'

import { fonts } from '@/constants/code-fonts'
import { themes } from '@/constants/code-theme'

import useStore from '@/store/store'

export default function CodeGlow() {
  const [width, setWidth] = useState('auto')
  const [showWidth, setShowWidth] = useState(false)

  const theme = useStore((state) => state.theme)
  const padding = useStore((state) => state.padding)
  const fontStyle = useStore((state) => state.fontStyle)
  const showBackground = useStore((state) => state.showBackground)

  const editorRef = useRef(null)

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    if (queryParams.size === 0) return
    const state = Object.fromEntries(queryParams)

    useStore.setState({
      ...state,
      code: state.code ? atob(state.code) : '',
      autoDetectLanguage: state.autoDetectLanguage === 'true',
      darkMode: state.darkMode === 'true',
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64),
    })
  }, [])

  return (
    <main className='min-h-screen flex justify-center items-center overflow-scroll'>
      <Head>
        <link
          rel='stylesheet'
          href={themes[theme].theme}
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href={fonts[fontStyle].src}
          crossOrigin='anonymous'
        />
      </Head>

      <Resizable
        enable={{ left: true, right: true }}
        minWidth={padding * 2 + 400}
        size={{ width, height: 'auto' }}
        onResize={(e, dir, ref) => setWidth(ref.offsetWidth.toString())}
        onResizeStart={() => setShowWidth(true)}
        onResizeStop={() => setShowWidth(false)}
      >
        <div
          className={cn(
            'overflow-hidden mb-2 transition-all ease-out',
            showBackground
              ? themes[theme].background
              : 'ring dark:ring-neutral-900 ring-neutral-100',
          )}
          style={{ padding }}
          ref={editorRef}
        >
          <CodeEditor />
        </div>
        <WidthMeasurement showWidth={showWidth} width={width} />
        <div
          className={cn(
            'transition-opacity w-fit mx-auto -mt-4',
            showWidth || width === 'auto'
              ? 'invisible opacity-0'
              : 'visible opacity-100',
          )}
        >
          <Button size='sm' onClick={() => setWidth('auto')} variant='ghost'>
            {/* <ResetIcon className="mr-2" /> */}
            Reset width
          </Button>
        </div>
      </Resizable>
      <Control editorRef={editorRef} />
    </main>
  )
}
