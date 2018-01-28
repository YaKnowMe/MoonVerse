import React, { Component } from 'react';
import redPlanet from './assets/planets/red-planet.svg';
import './App.css';

const styles = {
  transition: 'all 0.3s ease-out'
}

const planets = {
  height: "500px",
  width: "500px"
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      scale: 1
    };
  }

  onClickPlanet() {
    this.setState({
      scale: this.state.scale < 1 ? 1 : 0.9
    });
  }

  render() {
    return (
      <div className="App">
        <div className="siimple-grid">
          <div className="siimple-grid-row">
            <div className="siimple-grid-col siimple-grid-col--12" style={{...styles, scale: this.state.scale, transform: 'scale(' + this.state.scale + ')'}}>

              <img className="planet"
                src={ redPlanet }
                height={ planets.height }
                width= { planets.width }
                onClick={ this.onClickPlanet.bind(this) }
                style={ { cursor: 'pointer' } }
                />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
