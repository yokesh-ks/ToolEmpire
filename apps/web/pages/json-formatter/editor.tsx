import copy from 'copy-to-clipboard'
import yaml from 'js-yaml'
import jsonlint from 'jsonlint-mod'
import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import xmljs from 'xml-js'

import { Badge, Button, useToast } from '@tool-empire/components'

import CodeEditorWindow from '@/components/json-formatter/CodeEditorWindow'

const fileTypes = ['json']

function App() {
  const [inputJsonData, setInputJsonData] = useState('')
  const [outputJsonData, setOutputJsonData] = useState('')
  const [syntaxError, setSyntaxError] = useState(null)
  const [error, setError] = useState(false)
  const [lang, setLang] = useState('json')

  const { toast } = useToast()

  const handleInputChange = (action, data) => {
    switch (action) {
      case 'code': {
        try {
          setInputJsonData(data)
        } catch (err) {
          console.log(err)
        }
        break
      }
      default: {
        setError(true)
        console.warn('case not handled!', action, data)
      }
    }
  }

  const handleFormatClick = () => {
    try {
      const formattedJson = JSON.stringify(JSON.parse(inputJsonData), null, 2)
      setOutputJsonData(formattedJson)

      setLang('json')
    } catch (error) {
      setOutputJsonData('Invalid JSON Syntax')
      toast({
        variant: 'destructive',
        title: 'Invalid JSON Syntax',
      })
    }
  }

  const handleValidate = () => {
    try {
      jsonlint.parse(inputJsonData)
      setSyntaxError(null)
      setError(false)
      toast({
        title: 'Json Valid',
      })

      setLang('json')
    } catch (e) {
      console.log('error', e.message)
      setSyntaxError(e.message)
      setError(true)
      toast({
        variant: 'destructive',
        title: 'Json InValid',
      })
    }
  }

  const handleConvertToYaml = () => {
    const json = JSON.parse(inputJsonData)
    const yamlData = yaml.dump(json)
    setOutputJsonData(yamlData)
    setLang('yaml')
  }

  const handleConvertToXml = () => {
    const json = JSON.parse(inputJsonData)
    const xmlData = xmljs.js2xml(json, { compact: true, spaces: 4 })
    setOutputJsonData(xmlData)
    setLang('xml')
  }

  function parseCSV(data: any) {
    const results: string[] = []
    const headers: string[] = Object.keys(data)
    results.push(headers.join(','))

    const values: string[] = headers.map((header) => {
      return data[header]
    })

    setLang('csv') // Assuming setLang is defined and works correctly

    results.push(values.join(','))
    return results.join('\n')
  }

  function convertToCSV() {
    setOutputJsonData(parseCSV(inputJsonData))
  }

  const copyToClipboard = () => {
    copy(outputJsonData)
    toast({
      title: 'Copied',
    })
  }

  const readFileJson = (file) => {
    console.log(file)
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        setError(false)
        handleInputChange('code', reader.result)
      } catch (e) {
        setError(true)
      }
    }
    reader.readAsText(file)
  }

  return (
    <div
      className='w-full h-screen overflow-hidden px-6'
      style={{ paddingTop: 52 }}
    >
      <div className='flex my-3 gap-3'>
        <CodeEditorWindow
          code={inputJsonData}
          onChange={handleInputChange}
          lang='json'
        />

        <div className='flex flex-col w-80 gap-4 mt-2.5'>
          {outputJsonData && (
            <Badge>
              <span>Json</span>{' '}
              <svg
                aria-hidden='true'
                className='w-4 h-4 ml-2 mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='capitalize'>{lang}</span>
            </Badge>
          )}

          <FileUploader
            handleChange={readFileJson}
            name='file'
            types={fileTypes}
          >
            <Button className='w-full'>Upload</Button>
          </FileUploader>

          <Button onClick={handleFormatClick} variant='secondary'>
            Format / Json
          </Button>

          <Button disabled={error} onClick={handleValidate} variant='secondary'>
            Validate Json
          </Button>

          <Button disabled={error} onClick={convertToCSV} variant='secondary'>
            Convert to CSV
          </Button>

          <Button
            disabled={error}
            onClick={handleConvertToYaml}
            variant='secondary'
          >
            Convert to YAML
          </Button>
          <Button
            variant='secondary'
            disabled={error}
            onClick={handleConvertToXml}
          >{`Convert \n to XML`}</Button>

          <Button onClick={copyToClipboard}>Copy Output</Button>
        </div>

        {syntaxError ? (
          <CodeEditorWindow
            code={syntaxError}
            onChange={undefined}
            lang={lang}
          />
        ) : (
          <CodeEditorWindow
            code={outputJsonData}
            onChange={undefined}
            lang={lang}
          />
        )}
      </div>
    </div>
  )
}

export default App
