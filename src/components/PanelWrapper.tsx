import { FunctionComponent } from 'react'
import ColorModeToggler from './ColorModeToggler'
import { Box, Container } from '@chakra-ui/react'
type PanelWrapperProps = {
  child: JSX.Element
}

const PanelWrapper: FunctionComponent<PanelWrapperProps> = ({ child }) => {
  return (
    <Container>
      <ColorModeToggler />
      <Box className='overflow-x-hidden'>{child}</Box>
    </Container>
  )
}

export default PanelWrapper
