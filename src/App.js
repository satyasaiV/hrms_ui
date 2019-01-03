import React, { Component } from 'react';
import Login from './components/Login/Login';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {

  render() {
    
    return (
      <Router>
        <Login />
      </Router>
    );
  }
}

export default App;

