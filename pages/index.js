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
        <title>Yokesh Tools</title>
        <meta name="description" content="Tools" />
      </Head>
      <Layout>
        <Container>
          <Contents>
            <Card
              onClick={() => {
                window.open(`color-convertor`, "_self");
              }}
            >
              <h4>Color Magic</h4>
              <p>Convert Colors with Ease</p>

              <Button>View Tool</Button>
            </Card>
            <Card
              style={{ marginTop: 20 }}
              onClick={() => {
                window.open(`responsive-font`, "_self");
              }}
            >
              <h4>Fontwise</h4>
              <p>The Responsive Font Calculator for Modern Web Design</p>
              <Button>View Tool</Button>
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

const Button = styled.button`
  background: transparent;
  height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 8px;
  font-size: 12px;
`;

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
