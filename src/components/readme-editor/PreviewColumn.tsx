import ReactMarkdown from 'react-markdown'

import { Card } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import RawPreview from './RawPreview'

export const PreviewColumn = ({ selectedSectionSlugs, getTemplate }) => {
  selectedSectionSlugs = Array.from(new Set(selectedSectionSlugs))
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    if (template) {
      return `${acc}${template.markdown}`
    } else {
      return acc
    }
  }, ``)

  return (
    <Tabs defaultValue='preview'>
      <TabsList className='grid w-48 grid-cols-2'>
        <TabsTrigger value='preview'>Preview</TabsTrigger>
        <TabsTrigger value='raw'>Raw</TabsTrigger>
      </TabsList>
      <TabsContent value='preview'>
        <Card className={`p-4 overflow-scroll readme-editor-full`}>
          <ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>
        </Card>
      </TabsContent>
      <TabsContent value='raw'>
        <Card className={`p-4 overflow-scroll readme-editor-full`}>
          <RawPreview text={markdown} />
        </Card>
      </TabsContent>
    </Tabs>
  )
}
