import { FunctionComponent } from 'react'

type PanelWrapperProps = {
  child: JSX.Element
}

const PanelWrapper: FunctionComponent<PanelWrapperProps> = ({ child }) => {
  return <div className='mt-4'>{child}</div>
}

export default PanelWrapper
