import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import BrandPage from './components/BrandPage.jsx'
import ItemList from './components/ItemList.jsx'
import ItemPage from './components/ItemPage.jsx'
import Type from './components/Type.jsx'
import Brand from './components/Brand.jsx'
import Item from './components/Item.jsx'
import './App.css';


class App extends React.Component {
  state = {
    toggleAdmin: false
  }
  toggleAdmin = () => {
    this.setState({ toggleAdmin: !this.state.toggleAdmin })
  }
  render() {
    return (
      <div>
        <Router>
          <div className="topNav">
            <h1>Fly</h1>
            <div className="adminBtn">
              {this.state.toggleAdmin ?
                <Link to='/' className="linkBtn" onClick={this.toggleAdmin}>Logout</Link>
                :
                <Link to='/type' className="linkBtn" onClick={this.toggleAdmin}>Admin</Link>
              }
            </div>
          </div>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/type" component={Type} />
              <Route exact path="/type/:typeId" component={Brand} />
              <Route exact path="/brand/:brandId" component={Item} />

              <Route exact path="/brandpage/:typeId" component={BrandPage} />
              <Route exact path="/itemlist/:brandId" component={ItemList} />
              <Route exact path="/itempage/:brandId" component={ItemPage} />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
