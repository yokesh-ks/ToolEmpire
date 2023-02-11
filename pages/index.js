import React from "react";

import Head from "next/head";
import { HeroSection, AllToolSection } from "../container";

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
      <HeroSection
        title="ToolEmpire"
        description="Innovative tools for empire builders."
      />
      <AllToolSection data={data} />
    </div>
  );
}

export default index;
