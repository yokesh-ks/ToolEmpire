import React from "react";
import styled from "styled-components";
import { Layout } from "../src/Layout/layout";
import Head from "next/head";
import Image from "next/image";
import { BgGradient } from "../src/styles/bgBlur";

function index() {
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
        <Container>
          <Contents>
            <h1>Hello </h1>
            <h1>Home Page is Under Construction </h1>
            <h1>Will be Available Soon </h1>
            <h3>Please Visit Color-convertor or responsive font</h3>
            <h3>Click on Header to navigate to respective Page</h3>
          </Contents>

          <ImageContainer>
            <Image
              src="/construction.png"
              layout="fill"
              alt="Site is Under Contruction"
              objectFit="contain"
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
