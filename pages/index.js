import Head from "next/head";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Layout } from "../src/Layout/layout";
import { ColorHeader } from "../src/components/ColorHeader";
import { useRouter } from "next/router";
import { Hex2Rgba } from "../src/Containers/ColorConverter/Hex2Rgba";
import { Toast } from "../src/components/Toast";
import { BgGradient } from "../src/styles/bgBlur";

export default function Home() {
  const router = useRouter();
  const [Convertor, setConvertor] = useState("hex2rgba");
  const [toastActive, setToastActive] = useState(false);
  useEffect(() => {
    
    if (router?.query?.CC) {
      setConvertor(router.query.CC);
    }
  }, [router]);

  const handleConvertor = (convertor) => {
    switch (convertor) {
      case "hex2rgba":
        return <Hex2Rgba setToastActive={setToastActive} />;
      case "hex2rgb":
        return <Hex2Rgb />;
      case "rgba2hex":
        return <Rgba2Hex />;
      case "random":
        return <Random />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Head>
        <title>Yokesh Tools</title>
        <meta name="description" content="Tools" />
        <link rel="icon" href="/favicon.ico" />
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
        <ColorHeader />
        <Container>
          {handleConvertor(Convertor)}
          {toastActive && (
            <Toast toastActive={toastActive} setToastActive={setToastActive} />
          )}
        </Container>
      </Layout>
    </div>
  );
}

const Hex2Rgb = () => {
  return <p>Hex2Rgb</p>;
};

const Rgba2Hex = () => {
  return <p>Rgba2Hex</p>;
};

const Random = () => {
  return <p>Random</p>;
};

const Container = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 140px;
  padding-bottom: 100px;
`;
