import React, { Component } from 'react';
import redPlanet from './assets/planets/red-planet.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="planet">
          <img src={ redPlanet } onClick={ () => alert("test") }/>
        </div>
      </div>
    );
  }
}


export default App;
