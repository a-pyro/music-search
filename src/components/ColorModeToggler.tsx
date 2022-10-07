import { useColorMode } from '@chakra-ui/react'

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const isDark = colorMode === 'dark'

  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        display: 'inline-block',
        width: 50,
      }}
      className={`position-absolute mt-3 d-inline-block rounded-pill bg-${
        isDark ? 'primary' : 'secondary'
      }`}
      onClick={toggleColorMode}
    >
      <div
        className='position-relative'
        style={{ top: 0, left: isDark ? 25 : 0 }}
      >
        {isDark ? '🌞 ' : '🌚'}
      </div>
    </div>
  )
}

export default ColorModeToggler
