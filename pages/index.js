import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Card from "../src/components/Card";
import { Container } from "@uimakers/tools-ui";

const data = [
  {
    title: "Color Magic",
    description: "Convert Colors with Ease",
    iconName: "",
    routeName: "color-magic",
  },
  {
    title: "FontWise",
    description: "Responsive Font Calculator for Modern Web Design",
    iconName: "",
    routeName: "font-wise",
  },
  {
    title: "PDF to WORD",
    description: "Transform Your PDFs into Word Docs in a Snap",
    iconName: "",
    routeName: "pdf-to-word",
  },
];

function index() {
  return (
    <div>
      <Head>
        <title>ToolEmpire</title>
        <meta name="description" content="Tools" />
      </Head>
      <HeroSection />
      <Container>
        <Contents>
          {data.map((item, index) => (
            <Card
              onClick={() => {
                window.open(item?.routeName, "_self");
              }}
              key={index}
            >
              <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    background: "#D9D9D9",
                    borderRadius: 40,
                  }}
                ></div>
                <div style={{ flex: 1, marginLeft: 20 }}>
                  <h4>{item?.title}</h4>
                  <p>{item?.description}</p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button>View Tool</button>
              </div>
            </Card>
          ))}
        </Contents>
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
          ToolEmpire
        </h1>
        <h1
          style={{
            fontSize: 64,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Innovative tools for empire builders.
        </h1>
      </Container>
    </div>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 160px;
  margin-bottom: 160px;
  gap: 40px;

  h3 {
    color: #fff;
    line-height: 1.5;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

export default index;
