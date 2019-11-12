import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Type from './components/Type.jsx'
import Brand from './components/Brand.jsx'
import Item from './components/Item.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Type} />
          <Route exact path="/type/:typeId" component={Brand} />
          <Route exact path="/brand/:brandId" component={Item} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
