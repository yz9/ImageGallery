import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Gallery />
      </div>
    );
  }
}

export default App;
