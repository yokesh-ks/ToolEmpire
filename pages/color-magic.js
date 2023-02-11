import Head from "next/head";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Hex2Rgba } from "../src/Containers";
import { Toast, ColorHeader } from "../src/components";
import { HeroSection } from "../container";

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
        <title>ToolEmpire | ColorMagic</title>
        <meta name="description" content="Tools" />
      </Head>
      <HeroSection title="ColorMagic" description="Convert Color with Ease" />
      {/* <ColorHeader /> */}
      <Container>
        {handleConvertor(Convertor)}
        {toastActive && (
          <Toast toastActive={toastActive} setToastActive={setToastActive} />
        )}
      </Container>
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
