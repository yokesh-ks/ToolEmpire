import { Switch } from '@tool-empire/components'

import useStore from '@/store/store'

export default function BackgroundSwitch() {
  const showBg = useStore((state) => state.showBackground)

  return (
    <div>
      <label className='block mb-2 text-xs font-medium text-neutral-400'>
        Background
      </label>
      <Switch
        checked={showBg}
        onCheckedChange={(checked) =>
          useStore.setState({ showBackground: checked })
        }
        className='my-1.5'
      />
    </div>
  )
}
