import Head from "next/head";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BgGradient } from "../src/styles/bgBlur";
import { Layout } from "../src/Layout/layout";
import { FontInputBox } from "../src/components/fontinputBox";
import PxtoRem from "../src/components/pxtorem";
import { CopyToCLipBoard } from "../src/components/CopyToCLipBoard";
import { Toast } from "../src/components/Toast";

export default function Home() {
  const [maxScreenSize, setMaxScreenSize] = useState(1000);
  const [minScreenSize, setMinScreenSize] = useState(700);
  const [maxFontSize, setMaxFontSize] = useState(40);
  const [minFontSize, setMinFontSize] = useState(24);
  const [fontOpener, setFontOpener] = useState(false);
  const [toastActive, setToastActive] = useState(false);
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
    setToastActive(true);
  };
  return (
    <div>
      <Head>
        <title>Yokesh Tools</title>
        <meta name="description" content="Tools" />
      </Head>
      <Layout>
        <BgGradient size="300px" color="#9758a4" style={{ top: -200 }} />
        <BgGradient
          size="400px"
          color="#3e5eba"
          style={{ bottom: 100, left: -300 }}
        />
        <BgGradient
          size="400px"
          color="#3e5eba"
          style={{ top: -300, right: -300 }}
        />
        <BgGradient
          size="300px"
          color="#9758a4"
          style={{ bottom: 0, right: -250 }}
        />
        <PxtoRem
          fontOpener={fontOpener}
          setFontOpener={setFontOpener}
          setToastActive={setToastActive}
        />
        <Container maxWidth="600px">
          <Title>Responsive Font Calculator</Title>

          <Row>
            <h3>Minimum size</h3>
            <FontInputBox
              value={minFontSize}
              onChange={(e) => setMinFontSize(e.target.value)}
            />
            <p>at a viewport width of</p>
            <FontInputBox
              value={minScreenSize}
              onChange={(e) => setMinScreenSize(e.target.value)}
            />
          </Row>
          <Row>
            <h3>Maximum size</h3>
            <FontInputBox
              value={maxFontSize}
              onChange={(e) => setMaxFontSize(e.target.value)}
            />
            <p>at a viewport width of</p>
            <FontInputBox
              value={maxScreenSize}
              onChange={(e) => setMaxScreenSize(e.target.value)}
            />
          </Row>
          <Result>
            <ResultText>{clamp}</ResultText>
            <CopyToCLipBoard onClick={handleCopy} />
          </Result>
          {toastActive && (
            <Toast toastActive={toastActive} setToastActive={setToastActive} />
          )}
        </Container>
      </Layout>
    </div>
  );
}

const Container = styled.div`
  position: relative;
  max-width: ${(props) => props.maxWidth || "100%"};
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 3.2vw + 2rem, 4rem);
  text-align: center;
  color: rgb(0, 212, 255);
  line-height: 1.2;
  margin-bottom: 100px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ResultText = styled.p`
  font-size: 18px;
`;

const Result = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  height: 40px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 40px;
`;
