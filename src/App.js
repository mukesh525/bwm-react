import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './shared/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
        I m Component
      </div>
    );
  }
}

export default App;
