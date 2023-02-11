import React, { useState } from "react";
import styled from "styled-components";
import CopyToCLipBoard from "./CopyToCLipBoard";

const PxtoRem = (props) => {
  const { fontOpener, setFontOpener, setToastActive } = props;
  const [pxtorem, setPxtorem] = useState(true);
  const [pxValue, setPxValue] = useState(16);
  const [remValue, setRemValue] = useState(1);

  const handlePxValue = (e) => {
    setPxValue(e.target.value);
    setRemValue(e.target.value / 16);
  };

  const handleRemValue = (e) => {
    setRemValue(e.target.value);
    setPxValue(e.target.value * 16);
  };

  const handlepxCopy = () => {
    navigator.clipboard.writeText(pxValue);
    setToastActive(true);
  };

  const handleremCopy = () => {
    navigator.clipboard.writeText(remValue);
    setToastActive(true);
  };

  return (
    <div>
      {pxtorem ? (
        <>
          <Title>PX to REM Converter</Title>
          <Column>
            <InputContain>
              <InputBox value={pxValue} onChange={handlePxValue} />
              <Text>px</Text>
              <CopyToCLipBoard onClick={handlepxCopy} />
            </InputContain>
            <Arrow onClick={() => setPxtorem(!pxtorem)}>&#10607;</Arrow>
            <InputContain>
              <InputBox value={remValue} onChange={handleRemValue} />
              <Text>rem</Text>
              <CopyToCLipBoard onClick={handleremCopy} />
            </InputContain>
          </Column>
        </>
      ) : (
        <>
          <Title>REM to PX Converter</Title>
          <Column>
            <InputContain>
              <InputBox value={remValue} onChange={handleRemValue} />
              <Text>rem</Text>
              <CopyToCLipBoard onClick={handleremCopy} />
            </InputContain>
            <Arrow onClick={() => setPxtorem(!pxtorem)}>&#10607;</Arrow>
            <InputContain>
              <InputBox value={pxValue} onChange={handlePxValue} />
              <Text>px</Text>
              <CopyToCLipBoard onClick={handlepxCopy} />
            </InputContain>
          </Column>
        </>
      )}
    </div>
  );
};

const Button = styled.button`
  position: absolute;
  background: #3e5eba;
  background-image: linear-gradient(330deg, #fff59a 20%, #ff6d6d 100%);
  color: #1b1a22;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  text-align: center;
  width: 140px;
  height: 40px;
  margin-top: 10px;
  transform: rotate(-90deg);
  left: -90px;
  top: 100px;
  cursor: pointer;
  transition-timing-function: ease;

  &:hover {
    background-image: linear-gradient(150deg, #569aff 10.21%, #88dfab 84.57%);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #000000;
  margin-bottom: 24px;
`;

const InputContain = styled.div`
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 2px 2px 4px #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  gap: 8px;
`;

const Arrow = styled.button`
  font-size: 42px;
  width: 52px;
  height: 52px;
  background: rgba(35, 60, 115, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgba(35, 60, 115, 0.8);
  }
`;

const Text = styled.h3`
  color: #000000;
`;

const InputBox = styled.input.attrs((props) => ({
  // we can define static props
  type: "number",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: #000000;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 12px;
  font-size: 36px;
  text-align: center;
  width: 100%;
  height: 52px;
`;

export default PxtoRem;
