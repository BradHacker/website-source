import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import WebDesign from './pages/WebDesign/WebDesign'
import GraphicDesign from './pages/GraphicDesign/GraphicDesign'
import Photography from './pages/Photography/Photography'

class App extends Component {
  render() {
    let home = () => {
      return <Home />
    }
    let about = () => {
      return <About />
    }
    let webdesign = () => {
      return <WebDesign />
    }
    let graphicdesign = () => {
      return <GraphicDesign />
    }
    let photography = () => {
      return <Photography />
    }
    return (
      <Router>
        <div>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={home}/>
          <Route exact path={process.env.PUBLIC_URL + '/about'} component={about}/>
          <Route exact path={process.env.PUBLIC_URL + '/webdesign'} component={webdesign}/>
          <Route exact path={process.env.PUBLIC_URL + '/graphicdesign'} component={graphicdesign}/>
          <Route exact path={process.env.PUBLIC_URL + '/photography'} component={photography}/>
        </div>
      </Router>
    );
  }
}

export default App;
