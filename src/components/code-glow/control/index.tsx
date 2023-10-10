import { Card } from '@/components/ui/card'

import BackgroundSwitch from './background-switch'
import DarkModeSwitch from './dark-mode-switch'
import ExportOptions from './export-options'
import FontSelect from './font-select'
import LanguageSelect from './language-select'
import PaddingBox from './padding-box'
import ThemeSelect from './theme-select'

export const Control = ({ editorRef }) => {
  return (
    <Card className='fixed bottom-8 py-4 px-6'>
      <div className='flex flex-wrap gap-4 p-0'>
        <ThemeSelect />
        <LanguageSelect />
        <FontSelect />
        <PaddingBox />
        <BackgroundSwitch />
        <DarkModeSwitch />
        <div className='place-self-center'>
          <ExportOptions targetRef={editorRef} />
        </div>
      </div>
    </Card>
  )
}
