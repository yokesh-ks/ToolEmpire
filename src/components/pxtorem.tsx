import React, { useState } from "react";
import styled from "styled-components";
import { copy } from "../utils";

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

  return (
    <div>
      {pxtorem ? (
        <>
          <h2>PX to REM Converter</h2>
          <Column>
            <InputContain>
              <InputBox value={pxValue} onChange={handlePxValue} />
              <Text>px</Text>
              <div onClick={() => copy(pxValue)} style={{ cursor: "pointer" }}>
                Copy
              </div>
            </InputContain>
            <div onClick={() => setPxtorem(!pxtorem)}>Switch</div>
            <InputContain>
              <InputBox value={remValue} onChange={handleRemValue} />
              <Text>rem</Text>
              <div onClick={() => copy(remValue)} style={{ cursor: "pointer" }}>
                Copy
              </div>
            </InputContain>
          </Column>
        </>
      ) : (
        <>
          <h1>REM to PX Converter</h1>
          <Column>
            <InputContain>
              <InputBox value={remValue} onChange={handleRemValue} />
              <Text>rem</Text>
              <div onClick={() => copy(remValue)} style={{ cursor: "pointer" }}>
                Copy
              </div>
            </InputContain>
            <div onClick={() => setPxtorem(!pxtorem)}>Switch</div>
            <InputContain>
              <InputBox value={pxValue} onChange={handlePxValue} />
              <Text>px</Text>
              <div onClick={() => copy(pxValue)} style={{ cursor: "pointer" }}>
                Copy
              </div>
            </InputContain>
          </Column>
        </>
      )}
    </div>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
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
