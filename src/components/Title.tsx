// just for fun, probably better done with CSS

import useIsInViewport from 'hooks/useIsInViewport'
import { useRef, useState, useEffect } from 'react'

type TitleProps = {
  content: string
}

const Title = ({ content }: TitleProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null)

  const [position, setPosition] = useState<number>(0)

  const isInViewport = useIsInViewport(headingRef)

  console.log('isInViewport1: ', { isInViewport }, { position })

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined

    if (isInViewport && !interval) {
      interval = setInterval(() => {
        setPosition((p) => p + 1)
      }, 5)
    } else {
      setPosition(() => -1)
    }
    return () => clearInterval(interval!)
  }, [isInViewport, setPosition])

  return (
    <div className='pos-rel'>
      <h2
        ref={headingRef}
        style={{
          transform: `translateX(${position}px)`,
          fontSize: '5rem',
          fontWeight: 900,
          whiteSpace: 'nowrap',
        }}
        className='gradient-text text-left'
      >
        search
      </h2>

      <h2
        ref={headingRef}
        style={{
          transform: `translateX(${-position}px)`,
          fontSize: '5rem',
          fontWeight: 900,
          whiteSpace: 'nowrap',
        }}
        className='gradient-text text-end'
      >
        music
      </h2>
    </div>
  )
}

export default Title
