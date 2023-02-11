import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HeroSection, Hex2Rgba, Rgba2Hex, Hex2Rgb, Random } from "../container";

const data = [
  { title: "Hex to RGBA", fieldKey: "hex2rgba" },
  { title: "RGBA to Hex", fieldKey: "rgba2hex" },
  { title: "Random Color", fieldKey: "random" },
  { title: "Hex to RGB", fieldKey: "hex2rgb" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("hex2rgba");

  const handleConvertor = (convertor) => {
    switch (convertor) {
      case "hex2rgba":
        return <Hex2Rgba />;
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
      <div style={{ display: "flex", height: "100%", width: "100%", flex: 1 }}>
        <div
          style={{
            background: "#000000",
            width: 360,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 48,
            paddingBottom: 48,
          }}
        >
          {data.map((item) => (
            <h3
              key={item?.fieldKey}
              style={{
                color: item?.fieldKey === activeTab ? "#00FF75" : "#FFFFFF",
                fontSize: 24,
                lineHeight: "29px",
                paddingBottom: 24,
                cursor: "pointer",
              }}
              onClick={() => setActiveTab(item?.fieldKey)}
            >
              {item?.title}
            </h3>
          ))}
        </div>
        <>{handleConvertor(activeTab)}</>
      </div>
    </div>
  );
}