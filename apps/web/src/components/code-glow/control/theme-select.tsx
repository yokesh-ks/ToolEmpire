import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@tool-empire/components'
import { cn } from '@tool-empire/utils'

import { themes } from '@/constants/code-theme'

import useStore from '@/store/store'

export default function ThemeSelect() {
  const theme = useStore((state) => state.theme)

  return (
    <div>
      <label className='block mb-2 text-xs font-medium text-neutral-400'>
        Theme
      </label>
      <Select
        value={theme}
        onValueChange={(theme) => useStore.setState({ theme })}
      >
        <SelectTrigger className='w-36'>
          <SelectValue placeholder='Select Theme' />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(themes).map(([name, theme]) => (
            <SelectItem key={name} value={name}>
              <div className='flex gap-2 items-center'>
                <div className={cn('h-4 w-4 rounded-full', theme.background)} />
                <span className='capitalize'>{name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
