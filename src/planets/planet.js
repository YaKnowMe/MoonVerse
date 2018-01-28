import React, { Component } from 'react';
import redPlanet from '../assets/planets/red-planet.svg';
import { User } from '../users/user';

const styles = {
  transition: 'all 0.3s ease-out'
}

export class Planet extends User {

  onClickPlanet() {
    this.setState({
      user: {
        points: this.state.user.points += 1
      },
      planet: {
        scale: this.state.planet.scale < 1 ? 1 : 0.9,
        height: "500px",
        width: "500px"
      }
    });

  }

  render() {
    return(
    <div>
      <div className="siimple-grid">
        <div className="siimple-grid-row">
          <div className="siimple-grid-col siimple-grid-col--12">
            <div style={{...styles, scale: this.state.planet.scale, transform: 'scale(' + this.state.planet.scale + ')'}}>
              <img className="planet"
                src={ redPlanet }
                height={ this.state.planet.height }
                width= { this.state.planet.width }
                onClick={ this.onClickPlanet.bind(this)}
                style={ { cursor: 'pointer' } }
              />
            </div>
          </div>
        </div>

        <div className="siimple-grid-row">
          <div className="siimple-grid-col siimple-grid-col--12">
            <h1>You have {this.state.user.points} points</h1>
          </div>
        </div>

      </div>
    </div>
    );
  }
}
