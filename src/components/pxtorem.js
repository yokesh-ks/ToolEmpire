import React, { useState } from "react";
import styled from "styled-components";
import { CopyToCLipBoard } from "./CopyToCLipBoard";

function PxtoRem(props) {
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
    <FloatingBox fontOpener={fontOpener}>
      {pxtorem ? (
        <Column>
          <Button onClick={() => setFontOpener(!fontOpener)}>
            px &harr; rem
          </Button>
          <Title>PX to REM Converter</Title>
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
      ) : (
        <Column>
          <Button onClick={() => setFontOpener(!fontOpener)}>
            rem &harr; px
          </Button>
          <Title>REM to PX Converter</Title>
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
      )}
    </FloatingBox>
  );
}

const Button = styled.button`
  position: absolute;
  background: #3e5eba;
  background-image: linear-gradient(90deg, #3e5eba, #1a2e69, #4e306b);
  color: #fff;
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
    background-image: linear-gradient(90deg, #4e306b, #3e5eba, #1a2e69);
  }
`;

const FloatingBox = styled.div`
  position: absolute;
  width: 280px;
  height: 320px;
  background: #526099;
  right: ${(props) => (props.fontOpener ? "0" : "-280px")};
  top: 150px;
  color: #fff;
  z-index: 100;
  transition: right 0.5s;
  border-radius: 12px;
  padding: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const InputContain = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
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

const Text = styled.p`
  color: #fff;
`;

const InputBox = styled.input.attrs((props) => ({
  // we can define static props
  type: "number",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: #fff;
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
