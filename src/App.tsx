import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/details/:id' exact component={Details} />
    </Router>
  );
}

export default App;
