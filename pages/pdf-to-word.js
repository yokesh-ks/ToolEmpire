import React, { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import { Container } from "@uimakers/tools-ui";
import { Icon } from "../icons";
import { pdfListData } from "../src/constants";
import { Card } from "../src/newComponents";
import PDFParser from "pdf-parser";

const Pdf2Word = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [wordFile, setWordFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = useCallback(async () => {
    if (!pdfFile) return;
    console.log(pdfFile);
    setIsLoading(true);
    const pdfParser = await PDFParser();
    pdfParser.on("pdfParser_dataError", (errData) =>
      console.error(errData.parserError)
    );
    pdfParser.on("pdfParser_dataReady", (pdfData) => {
      // Convert pdfData to Word format
      setWordFile(convertToWord(pdfData));
      setIsLoading(false);
    });
    pdfParser.on("pdfParser_dataProgress", (progressData) => {
      setProgress(Math.round(progressData.percentage));
    });
    pdfParser.parseBuffer(pdfFile);
    console.log(pdfParser);
  }, [pdfFile]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!pdfFile) return;
    handleSubmit();
  }, [pdfFile]);

  const handleDrop = (event) => {
    event.preventDefault();
    setPdfFile(event.dataTransfer.files[0]);
  };

  const convertToWord = (pdfData) => {
    // Convert pdfData to Word format
    return pdfData;
  };

  return (
    <div>
      <Head>
        <title>ToolEmpire | Pdf2Word</title>
        <meta name="description" content="Tools" />
      </Head>
      <HeroSection />
      <SecondarySection />

      {!pdfFile ? (
        <form
          onSubmit={handleSubmit}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <UploadSection />
        </form>
      ) : null}

      {pdfFile ? (
        <UploadProcessingSection
          file={pdfFile}
          progress={progress}
          isLoading={isLoading}
        />
      ) : null}
      <BenefitsSection />
    </div>
  );
};

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
          Pdf2Word
        </h1>
        <h1
          style={{
            fontSize: 64,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Transform Your PDFs into Word Docs in a Snap
        </h1>
      </Container>
    </div>
  );
};

const SecondarySection = () => {
  return (
    <Container style={{ paddingTop: 108, paddingBottom: 108 }}>
      <h3
        style={{
          fontSize: 48,
          color: "#fff",
          textAlign: "center",
          color: "#040000",
        }}
      >
        Our user-friendly converter makes it simple to turn your PDFs into Word
        documents.
      </h3>
      <h3
        style={{
          marginTop: 32,
          fontSize: 48,
          color: "#fff",
          textAlign: "center",
          color: "#0077FF",
        }}
      >
        Give it a try today!
      </h3>
    </Container>
  );
};

const UploadSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#0077FF",
        paddingTop: 108,
        paddingBottom: 108,
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            color: "#fff",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Upload Your File
        </h1>
        <Icon name="Pdf" height={200} width={188} />
        <h5
          style={{
            fontSize: 24,
            color: "#fff",
            textAlign: "center",
            marginTop: 40,
            marginBottom: 32,
            opacity: 0.8,
          }}
        >
          Drop PDF Here
        </h5>
        <h6
          style={{
            fontSize: 24,
            color: "#fff",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          or
        </h6>
        <button
          style={{
            background: "#FF5E5E",
            borderRadius: 12,
            color: "#fff",
            border: 0,
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 12,
            fontSize: 20,
            fontFamily: "Montserrat-Bold",
            paddingBottom: 12,
          }}
        >
          Upload PDF TO CONVERT
        </button>
      </Container>
    </div>
  );
};

const UploadProcessingSection = ({ file, progress, isLoading }) => {
  return (
    <div
      style={{
        backgroundColor: "#0077FF",
        paddingTop: 108,
        paddingBottom: 108,
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            color: "#fff",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          Upload File 1 of 1
        </h1>
        <h6
          style={{
            fontSize: 24,
            color: "#fff",
            textAlign: "center",
          }}
        >
          {file?.name}
        </h6>
        <h6
          style={{
            fontSize: 24,
            color: "#fff",
            textAlign: "center",
          }}
        >
          {progress}
        </h6>
        <h6
          style={{
            fontSize: 24,
            color: "#fff",
            textAlign: "center",
          }}
        >
          {isLoading}
        </h6>
      </Container>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <div style={{ paddingTop: 120, paddingBottom: 120 }}>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 48,
        }}
      >
        {pdfListData?.map((item, index) => (
          <Card
            key={index}
            style={{ paddingTop: 20, paddingLeft: 20, paddingBottom: 20 }}
            colorVariant={item?.colorName}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 60,
                background: "#D9D9D9",
              }}
            />
            <h6
              style={{
                fontSize: 24,
                color: "#fff",
                marginTop: 16,
              }}
            >
              {item?.title}
            </h6>
            <h6
              style={{
                fontSize: 16,
                color: "#fff",
                marginTop: 16,
                fontWeight: 600,
              }}
            >
              {item?.description}
            </h6>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Pdf2Word;
