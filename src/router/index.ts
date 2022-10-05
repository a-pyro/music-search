import { Path } from 'types/router'
import { useHistory } from 'react-router-dom'

export const useRoutePush = () => {
  const history = useHistory()
  return (path: Path) => history.push(path)
}
