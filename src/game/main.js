import React, { Component } from 'react';
import redPlanet from '../assets/planets/red-planet.svg';
// Loader by Sam Herbert
import Loader from '../assets/loader.svg'

import cookie from 'react-cookies';
import Draggable, {DraggableCore} from 'react-draggable';

import { Controler } from '../components/controler';


const styles = {
  transition: 'all 0.3s ease-out'
}

export class Game extends Controler {

  onClickPlanet() {

    this.setState({
      user: {
        ...this.state.user, points: this.state.user.points += this.state.user.properties.power
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

  openShop() {
    this.setState({
      shopOpened: this.state.shopOpened === true ? false : true
    });
  }

  // ITEMS FROM SHOP
  moon() {
  if (this.state.moonBought === true) {
    this.setState({
      user: {
        ...this.state.user,
        properties: { power: this.state.user.properties.power += 1 }
      }
    });
  } else if (this.state.user.points >= this.state.items.moon.price) {

    this.state.user.points -= this.state.items.moon.price;

    this.setState({
      moonBought: true,
      user: {
        ...this.state.user,
        properties: { power: this.state.user.properties.power += this.state.items.moon.power }
      }
    });

    cookie.save('points', this.state.user.points, { path:'/' });
    cookie.save('moonBought', true, { path:'/' });

  } else {
    alert('You don\'t have money for that');
  }

  cookie.save('power', this.state.user.properties.power, { path:'/' });

}

  render() {

    const playerPoints = <h1>{this.state.user.points} &nbsp;$</h1>;



    // moon
    const moonbtnName = this.state.items.moon.name + ' ' + this.state.items.moon.price + '$';

    const shopMoon = this.state.moonBought === false ? (
      <div>
        <button onClick={ this.moon.bind(this) } type="button" className="btn btn-outline-primary space">{ moonbtnName }</button>
      </div>
    ) : (
      <div>
        <button onClick={ this.moon.bind(this) } type="button" className="btn btn-outline-primary space" disabled>{ moonbtnName }</button>
      </div>
    );

    const moonObject = this.state.moonBought === true ? (
      <img className="img-fluid"
        src={ redPlanet }
        height={ this.state.items.moon.height }
        width={ this.state.items.moon.width }
        style={ { cursor: 'pointer' } }
      />
    ) : <div></div>;


    // Shop Viewer
    const shopViewer = this.state.shopOpened != false ? (
      <div>
        <button onClick={ this.openShop.bind(this) } type="button" className="btn btn-outline-primary">Close Shop</button>
        <br/>
        {/*Moon*/}

        { shopMoon }


      </div>
    ) : <button onClick={ this.openShop.bind(this) } type="button" className="btn btn-outline-primary">Shop</button>



    const loaderControler = this.state.planet.loaded === false ? <img src={ Loader }/> : <div>{ playerPoints } <br/> { shopViewer } </div>;

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
            <Draggable>
              { moonObject }
            </Draggable>


          </div>

        </div>
      </div>
            { loaderControler }
      </div>

    );
  }
}
