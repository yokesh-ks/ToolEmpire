import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  MoonIcon,
  Search,
  SunIcon,
  X,
} from 'lucide-react'

import Github from './assets/github'
import Spinner from './assets/spinner'

const iconComponents = {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoonIcon,
  SunIcon,
  Circle,
  Github,
  Spinner,
  X,
  Search,
}

export const Icon = (props) => {
  const IconComponent = iconComponents[props.name]

  if (IconComponent) {
    return (
      <div className='flex'>
        <IconComponent {...props} />
      </div>
    )
  }
  return null
}
