import { Container } from '@uimakers/tools-ui'
import Head from 'next/head'
import PDFParser from 'pdf-parser'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Button } from '@tool-empire/components'

import { pdfListData } from '../src/constants'

const Pdf2Word = () => {
  const [pdfFile, setPdfFile] = useState(null)
  const [wordFile, setWordFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSubmit = useCallback(async () => {
    if (!pdfFile) return
    console.log(pdfFile)
    setIsLoading(true)
    const pdfParser = await PDFParser()
    pdfParser.on('pdfParser_dataError', (errData) =>
      console.error(errData.parserError),
    )
    pdfParser.on('pdfParser_dataReady', (pdfData) => {
      // Convert pdfData to Word format
      setWordFile(convertToWord(pdfData))
      setIsLoading(false)
    })
    pdfParser.on('pdfParser_dataProgress', (progressData) => {
      setProgress(Math.round(progressData.percentage))
    })
    pdfParser.parseBuffer(pdfFile)
    console.log(pdfParser)
  }, [pdfFile])

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    if (!pdfFile) return
    handleSubmit()
  }, [pdfFile])

  const handleDrop = (event) => {
    event.preventDefault()
    setPdfFile(event.dataTransfer.files[0])
  }

  const convertToWord = (pdfData) => {
    // Convert pdfData to Word format
    return pdfData
  }

  return (
    <div>
      <Head>
        <title>ToolEmpire | Pdf2Word</title>
        <meta name='description' content='Tools' />
      </Head>
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
  )
}

const SecondarySection = () => {
  return (
    <Container style={{ paddingTop: 108, paddingBottom: 108 }}>
      <h3>
        Our user-friendly converter makes it simple to turn your PDFs into Word
        documents.
      </h3>
      <h3>Give it a try today!</h3>
    </Container>
  )
}

const UploadSection = () => {
  return (
    <div
      style={{
        backgroundColor: '#0077FF',
        paddingTop: 108,
        paddingBottom: 108,
      }}
    >
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 48,
            color: '#fff',
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          Upload Your File
        </h1>
        <h5
          style={{
            fontSize: 24,
            color: '#fff',
            textAlign: 'center',
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
            color: '#fff',
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          or
        </h6>
        <Button>Upload PDF TO CONVERT</Button>
      </Container>
    </div>
  )
}

const UploadProcessingSection = ({ file, progress, isLoading }) => {
  return (
    <div
      style={{
        backgroundColor: '#0077FF',
        paddingTop: 108,
        paddingBottom: 108,
      }}
    >
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 48,
            color: '#fff',
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          Upload File 1 of 1
        </h1>
        <h6
          style={{
            fontSize: 24,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          {file?.name}
        </h6>
        <h6
          style={{
            fontSize: 24,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          {progress}
        </h6>
        <h6
          style={{
            fontSize: 24,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          {isLoading}
        </h6>
      </Container>
    </div>
  )
}

const BenefitsSection = () => {
  return (
    <div style={{ paddingTop: 120, paddingBottom: 120 }}>
      <Container>
        <GridContainer>
          {pdfListData?.map((item, index) => (
            <div
              key={index}
              style={{ paddingTop: 20, paddingLeft: 20, paddingBottom: 20 }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  background: '#D9D9D9',
                }}
              />
              <h6
                style={{
                  fontSize: 24,
                  color: '#fff',
                  marginTop: 16,
                }}
              >
                {item?.title}
              </h6>
              <h6
                style={{
                  fontSize: 16,
                  color: '#fff',
                  marginTop: 16,
                  fontWeight: 600,
                }}
              >
                {item?.description}
              </h6>
            </div>
          ))}
        </GridContainer>
      </Container>
    </div>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export default Pdf2Word

export async function getServerSideProps(ctx) {
  return {
    redirect: {
      permanent: false,
      destination: '/404',
    },
  }
}
