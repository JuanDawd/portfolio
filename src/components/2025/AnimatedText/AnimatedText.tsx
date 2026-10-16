import { m } from 'framer-motion'
import { quote, singleWord } from './constants'
import type { AnimatedTextProps } from './AnimatedText.types'

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  return (
    <div className='mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center sm:py-0'>
      <m.h1
        className={`inline-block w-full text-8xl font-bold capitalize ${className}`}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) => (
          <m.span
            key={word + ' - ' + index}
            className='inline-block'
            variants={singleWord}
          >
            {word}&nbsp;
          </m.span>
        ))}
      </m.h1>
    </div>
  )
}

export default AnimatedText
