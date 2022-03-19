import Head from "next/head";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  const [maxScreenSize, setMaxScreenSize] = useState(700);
  const [minScreenSize, setMinScreenSize] = useState(1000);
  const [maxFontSize, setMaxFontSize] = useState(40);
  const [minFontSize, setMinFontSize] = useState(24);
  const [clamp, setClamp] = useState("");

  useEffect(() => {
    let b = (
      (maxFontSize - minFontSize) /
      (maxScreenSize - minScreenSize)
    ).toFixed(3);
    let a = ((maxFontSize - maxScreenSize * b) / 16).toFixed(3);
    const output = `clamp(${minFontSize / 16}rem, ${a}rem + ${b}vw, ${
      maxFontSize / 16
    }rem)`;
    setClamp(output);
  }, [maxScreenSize, minScreenSize, maxFontSize, minFontSize]);

  const handleCopy = () => {
    navigator.clipboard.writeText(clamp);
  }
  return (
    <div>
      <Head>
        <title>Yokesh Tools</title>
        <meta name="description" content="Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="600px">
        <h1>Responsive Font Calculator</h1>
        <div>
          <Input
            value={maxFontSize}
            width="60px"
            height="28px"
            onChange={(e) => setMaxFontSize(e.target.value)}
          />
          <Input
            value={maxScreenSize}
            width="60px"
            height="28px"
            onChange={(e) => setMaxScreenSize(e.target.value)}
          />
        </div>
        <div>
          <Input
            value={minFontSize}
            width="60px"
            height="28px"
            onChange={(e) => setMinFontSize(e.target.value)}
          />
          <Input
            value={minScreenSize}
            width="60px"
            height="28px"
            onChange={(e) => setMinScreenSize(e.target.value)}
          />
        </div>
        <Result>
          <h4>{clamp}</h4>
          <button onClick={handleCopy}>
            <ClipBoardIcon />
          </button>
        </Result>
      </Container>
    </div>
  );
}

const ClipBoardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="#2FA4FF"
    viewBox="0 0 16 16"
  >
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
  </svg>
);

const Container = styled.div`
  max-width: ${(props) => props.maxWidth || "100%"};
  margin: 0 auto;
`;

const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "number",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: ${(props) => props.theme.colors.primary1};
  background: ${(props) => props.theme.colors.secondary};
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  text-align: center;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

const Result = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;
`;
