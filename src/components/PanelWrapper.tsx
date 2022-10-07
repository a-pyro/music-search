import { FunctionComponent } from 'react'
import ColorModeToggler from './ColorModeToggler'
import { Container } from 'react-bootstrap'

type PanelWrapperProps = {
  child: JSX.Element
}

const PanelWrapper: FunctionComponent<PanelWrapperProps> = ({ child }) => {
  return (
    <Container>
      <ColorModeToggler />
      <div className='mt-4 overflow-x-hidden'>{child}</div>
    </Container>
  )
}

export default PanelWrapper
