import { Box, Flex, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isMouseOver, setIsMouseOver] = useState(false)
  const isDark = colorMode === 'dark'

  const modeEmoji = isDark ? '🌞' : '🌚'

  return (
    <Flex
      w='30px'
      direction={'column'}
      style={{
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={toggleColorMode}
    >
      {isMouseOver && <Box>{modeEmoji}</Box>}
      <Box textAlign={'left'}>💡</Box>
    </Flex>
  )
}

export default ColorModeToggler
