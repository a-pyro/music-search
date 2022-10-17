import { Box, Flex, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isMouseOver, setIsMouseOver] = useState(false)

  const isDark = colorMode === 'dark'

  return (
    <Flex
      w='30px'
      pos='absolute'
      direction={'column'}
      style={{
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={toggleColorMode}
    >
      {isMouseOver && <Box>{isDark ? '🌞 ' : '🌚'}</Box>}
      <Box textAlign={'left'}>💡</Box>
    </Flex>
  )
}

export default ColorModeToggler
