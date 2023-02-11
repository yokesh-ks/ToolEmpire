import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../icons";

const PxtoRem = (props) => {
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
  };

  const handleremCopy = () => {
    navigator.clipboard.writeText(remValue);
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
              <div onClick={handlepxCopy} style={{ cursor: "pointer" }}>
                <Icon name="CopyLink" width={28} height={28} />
              </div>
            </InputContain>
            <IconButton onClick={() => setPxtorem(!pxtorem)}>
              <Icon name="SwitchArrow" width={20} height={26} />
            </IconButton>
            <InputContain>
              <InputBox value={remValue} onChange={handleRemValue} />
              <Text>rem</Text>
              <div onClick={handleremCopy} style={{ cursor: "pointer" }}>
                <Icon name="CopyLink" width={28} height={28} />
              </div>
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
              <div onClick={handleremCopy} style={{ cursor: "pointer" }}>
                <Icon name="CopyLink" width={28} height={28} />
              </div>
            </InputContain>
            <IconButton onClick={() => setPxtorem(!pxtorem)}>
              <Icon name="SwitchArrow" width={20} height={26} />
            </IconButton>
            <InputContain>
              <InputBox value={pxValue} onChange={handlePxValue} />
              <Text>px</Text>
              <div onClick={handlepxCopy} style={{ cursor: "pointer" }}>
                <Icon name="CopyLink" width={28} height={28} />
              </div>
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

const Text = styled.h3`
  color: #000000;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 2px 2px 0px #000000;
  border-radius: 2px;
  cursor: pointer;
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
