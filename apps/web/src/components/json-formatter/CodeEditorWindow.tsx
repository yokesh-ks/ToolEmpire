import Editor from '@monaco-editor/react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

import { Card } from '@tool-empire/components'

const options = {
  minimap: { enabled: false },
  lineNumbers: false,
  wordWrap: true,
}

const CodeEditorWindow = ({ onChange, code, lang }) => {
  const [value, setValue] = useState(code || '')
  const { theme } = useTheme()

  useEffect(() => {
    setValue(code)
  }, [code])

  const handleEditorChange = (value) => {
    setValue(value)
    onChange('code', value)
  }

  return (
    <Card className='mt-2.5 h-full readme-editor-full w-full'>
      <Editor
        options={options}
        width={`100%`}
        language={lang || 'json'}
        value={value}
        className='overflow-hidden pt-3'
        theme={theme === 'light' ? 'vs-light' : 'vs-dark'}
        onChange={handleEditorChange}
      />
    </Card>
  )
}

export default CodeEditorWindow
