import { Path } from 'types/router'
import { useNavigate } from 'react-router-dom'

export const useRouteNavigation = () => {
  const navigate = useNavigate()
  return (path: Path) => navigate(path)
}
