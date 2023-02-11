import React from "react";
import styled from "styled-components";
import { Layout } from "../src/Layout/layout";
import Head from "next/head";
import Lottie from "react-lottie-player";
import rocketData from "../src/animation/lottie-data/rocket.json";
import Card from "../src/components/Card";

function index() {
  return (
    <div>
      <Head>
        <title>ToolEmpire</title>
        <meta name="description" content="Tools" />
      </Head>
      <Layout>
        <Container>
          <Contents>
            <Card
              onClick={() => {
                window.open(`color-magic`, "_self");
              }}
            >
              <h4>Color Magic</h4>
              <p>Convert Colors with Ease</p>

              <button>View Tool</button>
            </Card>
            <Card
              style={{ marginTop: 20 }}
              onClick={() => {
                window.open(`font-wise`, "_self");
              }}
            >
              <h4>Fontwise</h4>
              <p>The Responsive Font Calculator for Modern Web Design</p>
              <button>View Tool</button>
            </Card>
          </Contents>

          <ImageContainer>
            <Lottie
              animationData={rocketData}
              play
              loop
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </ImageContainer>
        </Container>
      </Layout>
    </div>
  );
}

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
`;

const Contents = styled.div`
  h3 {
    color: #fff;
    line-height: 1.5;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

export default index;
