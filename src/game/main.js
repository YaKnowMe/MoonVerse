import React, { Component } from 'react';
import redPlanet from '../assets/planets/red-planet.svg';
// Loader by Sam Herbert
import Loader from '../assets/loader.svg'

import cookie from 'react-cookies';

import { User } from '../users/user';


const styles = {
  transition: 'all 0.3s ease-out'
}

export class Game extends User {

  onClickPlanet() {
    this.setState({
      user: {
        points: this.state.user.points += 1
      },
      planet: {
        scale: this.state.planet.scale < 1 ? 1 : 0.9,
        height: '500px',
        width: '500px'
      }
    });
    cookie.save('points', this.state.user.points, { path:'/' });
  }

  hideLoader() {
    this.setState({
      planet: {
        loaded: true,
        scale: 1,
        height: '500px',
        width: '500px'
      }
    });
  }
  resetPoints(){
    cookie.remove('points');
    window.location.reload();
  }

  render() {

    const playerPoints = <h1>You &nbsp;&nbsp; have &nbsp;&nbsp; {this.state.user.points} &nbsp;&nbsp; points</h1>;

    const loaderControler = this.state.planet.loaded === false ? <img src={ Loader }/> : <div>{ playerPoints }</div>;

    return(
    <div>
      <div className="row">
        <div className="col">
          <div style={{...styles, scale: this.state.planet.scale, transform: 'scale(' + this.state.planet.scale + ')'}}>
            <img className="planet img-fluid"
              src={ redPlanet }
              height={ this.state.planet.heigh }
              width={ this.state.planet.width }
              onClick={ this.onClickPlanet.bind(this) }
              onLoad={ this.hideLoader.bind(this) }
              style={ { cursor: 'pointer' } }
            />
          </div>
        </div>
      </div>
            { loaderControler }
            <button onClick={ this.resetPoints }>Click (dev)</button>;
      </div>

    );
  }
}
