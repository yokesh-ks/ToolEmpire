import Github from './assets/github'
import Spinner from './assets/spinner'

const iconComponents = {
  Github,
  Spinner,
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
