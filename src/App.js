import React, { Component } from 'react';
import { Planet } from './planets/planet';
import { User } from './users/user';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Planet/>
      </div>
    );
  }
}


export default App;
