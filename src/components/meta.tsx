import React from "react";
import Head from "next/head";

export const Meta = () => {
  const image = "/preview.png";
  const title = "ToolEmpire -  Innovative tools for empire builders.";
  const description =
    "Discover a treasure trove of powerful tools designed to empower empire builders like you. Whether you're a designer, marketer, developer, or entrepreneur, our site offers an array of essential utilities at your fingertips.";
  const url = "https://tool-empire.vercel.app";
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Tool Empire, ColorMagic, FontWise, CodeGlow, Pdf"
      ></meta>

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
  );
};
