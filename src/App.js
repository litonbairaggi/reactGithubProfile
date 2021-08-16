import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Home />
      </div>
    );
  }
}

export default App;
