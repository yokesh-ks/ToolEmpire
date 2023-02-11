import Head from "next/head";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BgGradient } from "../src/styles/bgBlur";
import { Layout } from "../src/Layout/layout";
import {
  CopyToCLipBoard,
  FontInputBox,
  PxtoRem,
  Toast,
} from "../src/components";
import { Clamp } from "../src/utils/clamp";
import { Container } from "@uimakers/tools-ui";

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
        <title>ToolEmpire | FontWise</title>
        <meta
          name="description"
          content="An online tool to generate a fluid-responsive property. It generates font size variables for a fluid type scale with CSS clamp."
        />
        <meta
          property="og:url"
          content="https://toolempire.vercel.app/font-wise"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ToolEmpire | FontWise" />
        <meta
          property="og:description"
          content="An online tool to generate a fluid-responsive property. It generates font size variables for a fluid type scale with CSS clamp."
        />
        <meta property="og:image" content="/fontimage.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="toolempire.vercel.app" />
        <meta
          property="twitter:url"
          content="https://toolempire.vercel.app/font-wise"
        />
        <meta name="twitter:title" content="ToolEmpire | FontWise" />
        <meta
          name="twitter:description"
          content="An online tool to generate a fluid-responsive property. It generates font size variables for a fluid type scale with CSS clamp."
        />
        <meta name="twitter:image" content="/fontimage.png" />
      </Head>

      <HeroSection />
      <PxtoRem
        fontOpener={fontOpener}
        setFontOpener={setFontOpener}
        setToastActive={setToastActive}
      />

      <Container maxWidth="600px">
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
    </div>
  );
}

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#0077FF",
        paddingTop: 154,
        paddingBottom: 66,
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: 96,
            color: "#fff",
            textAlign: "center",
          }}
        >
          FontWise
        </h1>
        <h1
          style={{
            fontSize: 64,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Responsive Font Calculator for Modern Web Design
        </h1>
      </Container>
    </div>
  );
};

const Title = styled.h1`
  font-size: ${Clamp(36, 20)};
  font-weight: 400;
  text-align: center;
  color: #fff;
  padding-top: 100px;
  line-height: 1.2;
  margin-bottom: 40px;
`;

const Description = styled.h1`
  font-size: ${Clamp(60, 32)};
  font-weight: 400;
  text-align: center;
  color: #fff;
  max-width: 720px;
  width: "100%";
  line-height: 1.2;
  margin: auto;
  margin-bottom: 100px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  h3 {
    color: #fff;
  }

  p {
    color: #fff;
  }
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
