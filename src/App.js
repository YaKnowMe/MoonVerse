import React, { Component } from 'react';
import { Planet } from './planets/planet';
import {Navbar} from './controler/navbar';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        {/*Navbar*/}
        <Navbar/>
        {/*Planet/User settings*/}
        <Planet/>
      </div>
    );
  }
}


export default App;
