import { Button } from '@tool-empire/components'

export const Hero = (props) => {
  const { buttonLabel, description, handleButtonCLick, title } = props

  return (
    <div
      id='home'
      className='relative overflow-hidden pt-[120px] md:pt-[100px] lg:pt-[160px]'
    >
      <div className='container'>
        <div className='-mx-4 flex flex-wrap items-center'>
          <div className='w-full px-4'>
            <div
              className='hero-content wow fadeInUp mx-auto max-w-[780px] text-center'
              data-wow-delay='.2s'
            >
              <h1 className='mb-8 text-3xl font-bold leading-snug sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug'>
                {title}
              </h1>
              <p className='mx-auto mb-10 max-w-[720px] text-base  sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed'>
                {description}
              </p>
              <ul className='mb-10 flex flex-wrap items-center justify-center'>
                <Button onClick={() => handleButtonCLick()}>
                  {buttonLabel}
                </Button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
