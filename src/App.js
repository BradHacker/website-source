import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'

class App extends Component {
  render() {
    let home = () => {
      return <Home />
    }
    let about = () => {
      return <About />
    }
    return (
      <Router>
        <div>
          <Route exact path="/" component={home}/>
          <Route exact path="/about" component={about}/>
        </div>
      </Router>
    );
  }
}

export default App;
