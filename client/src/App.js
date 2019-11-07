import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Type from './components/Type.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Type} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
