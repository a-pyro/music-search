import PanelWrapper from 'components/PanelWrapper'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Route path='/' exact render={() => <PanelWrapper child={<Home />} />} />
      <Route
        path='/details/:id'
        render={() => <PanelWrapper child={<Details />} />}
      />
    </Router>
  )
}

export default App
