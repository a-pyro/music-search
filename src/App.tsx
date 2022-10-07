import { ChakraProvider } from '@chakra-ui/react'
import theme from 'chakra/theme'
import PanelWrapper from 'components/PanelWrapper'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from 'views/Details'
import Home from 'views/Home'

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<PanelWrapper child={<Home />} />} />
          <Route
            path='/details/:id'
            element={<PanelWrapper child={<Details />} />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
