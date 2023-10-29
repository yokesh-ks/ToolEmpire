import { copy } from '@tool-empire/utils'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Button, Input } from '@tool-empire/components'

const Random = () => {
  const [result, setResult] = useState('#FFC700')
  const [activeTab, setActiveTab] = useState('Hex')

  const handleButtonClick = () => {
    if (activeTab === 'Hex') {
      setResult(getRandomHexCode())
      return
    }

    if (activeTab === 'RGBA') {
      setResult(getRandomRgbaCode())
      return
    }
  }
  const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

  const getRandomHexCode = () => {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
      var num = getRandomNumber()
      hex += HEX[num]
    }
    return hex
  }

  const getRandomRgbaCode = () => {
    const color1 = Math.floor(Math.random() * 255)
    const color2 = Math.floor(Math.random() * 255)
    const color3 = Math.floor(Math.random() * 255)
    return `rgba(${color1}, ${color2}, ${color3}, 1)`
  }

  const getRandomNumber = () => Math.floor(Math.random() * HEX.length)

  return (
    <Container backgroundColor={result}>
      <NavBar>
        <h3>Random Color Generator</h3>
        <div style={{ gap: 32 }}>
          <h3 onClick={() => setActiveTab('Hex')} style={{ cursor: 'pointer' }}>
            Hex
          </h3>
          <h3
            onClick={() => setActiveTab('RGBA')}
            style={{ cursor: 'pointer' }}
          >
            RGBA
          </h3>
        </div>
      </NavBar>
      <WrapperContainer>
        <div>
          <h1>{activeTab}</h1>
          <Input width='300px' value={result} />
          <div onClick={() => copy(result)}>copy</div>
        </div>
      </WrapperContainer>
      <Button onClick={() => handleButtonClick()}>Click Here</Button>
    </Container>
  )
}

export default Random

const NavBar = styled.div`
  width: 100%;
  height: 78px;
  background: #ff5e5e;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
`
