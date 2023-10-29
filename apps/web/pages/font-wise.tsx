import { copy } from '@tool-empire/utils'
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

export default function Home() {
  const [maxScreenSize, setMaxScreenSize] = useState(1000)
  const [minScreenSize, setMinScreenSize] = useState(700)
  const [maxFontSize, setMaxFontSize] = useState(40)
  const [minFontSize, setMinFontSize] = useState(24)
  const [clamp, setClamp] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    const b: any = (
      (maxFontSize - minFontSize) /
      (maxScreenSize - minScreenSize)
    ).toFixed(3)
    const a = ((maxFontSize - maxScreenSize * b) / 16).toFixed(3)
    const output = `clamp(${minFontSize / 16}rem, ${a}rem + ${b}vw, ${
      maxFontSize / 16
    }rem)`
    setClamp(output)
  }, [maxScreenSize, minScreenSize, maxFontSize, minFontSize])

  return (
    <div>
      <div className='flex h-full w-full flex-1'>
        <div className='flex h-full w-full flex-1'>
          <div
            style={{
              maxWidth: 800,
              margin: 'auto',
              paddingTop: 144,
              paddingBottom: 144,
            }}
          >
            <div className='flex gap-4 items-center'>
              <h3>Minimum size</h3>
              <Input
                style={{ width: 100 }}
                value={minFontSize}
                onChange={(e: any) => setMinFontSize(e.target.value)}
              />
              <h3>at a viewport width of</h3>
              <Input
                style={{ width: 100 }}
                value={minScreenSize}
                onChange={(e: any) => setMinScreenSize(e.target.value)}
              />
            </div>
            <div className='flex gap-4 mt-4 items-center'>
              <h3>Maximum size</h3>
              <Input
                style={{ width: 100 }}
                value={maxFontSize}
                onChange={(e: any) => setMaxFontSize(e.target.value)}
              />
              <h3>at a viewport width of</h3>
              <Input
                style={{ width: 100 }}
                value={maxScreenSize}
                onChange={(e: any) => setMaxScreenSize(e.target.value)}
              />
            </div>

            <div className='flex mt-4'>
              <Input value={clamp} />
              <Button
                onClick={() => {
                  copy(clamp)
                  toast({
                    title: 'Value Copied',
                    description: clamp,
                  })
                }}
              >
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
