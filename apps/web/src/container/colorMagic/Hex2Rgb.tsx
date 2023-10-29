import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Input } from '@tool-empire/components'
import { copy } from '@tool-empire/utils'

const Hex2Rgb = () => {
  const [result, setResult] = useState('')
  const [value, setValue] = useState('#dc7272')

  useEffect(() => {
    // Remove the "#" symbol from the hex code
    const hex = value.replace('#', '')

    // If the hex code is too long, set the result to "Invalid Hex Code" and return
    if (hex.length > 6) {
      setResult('Invalid Hex Code')
      return
    }

    // Extract the red, green, and blue values from the hex code
    let [r, g, b] = [0, 2, 4].map((offset) => {
      // If the hex code is 3 characters long, repeat each character to get a 2-character string
      const sub =
        hex.length === 3
          ? hex.slice(offset, offset + 1).repeat(2)
          : hex.slice(offset, offset + 2)
      // Convert the 2-character string to a number
      return parseInt(sub, 16)
    })

    // If any of the values are not a number, set the result to "Invalid Hex Code"
    if (!r || !g || !b) {
      setResult('Invalid Hex Code')
    } else {
      // Otherwise, set the result to the `rgba` value
      setResult(`rgba(${r}, ${g}, ${b})`)
    }
  }, [value])

  return (
    <Container backgroundColor={result}>
      <WrapperContainer>
        <div>
          <h1 style={{ marginRight: 24, color: '#000000' }}>Hex</h1>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          <div onClick={() => copy(value)}>copy</div>
        </div>
        <div>
          <h1 style={{ marginRight: 24, color: '#000000' }}>RGBA</h1>
          <Input width='300px' value={result} />
          <div onClick={() => copy(value)}>copy</div>
        </div>
      </WrapperContainer>
    </Container>
  )
}

export default Hex2Rgb

const Container = styled.div`
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  margin: auto;
`
