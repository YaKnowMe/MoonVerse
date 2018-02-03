import React, { Component } from 'react';
import redPlanet from '../assets/planets/red-planet.svg';
import normalMoonImg from '../assets/moons/moon.png';
// Loader by Sam Herbert
import Loader from '../assets/loader.svg'

import cookie from 'react-cookies';
import Draggable, {DraggableCore} from 'react-draggable';
import { Modal, Button, Badge } from 'react-bootstrap';

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
  // MOON
  moonBuy() {
    if (this.state.moonBought === true && this.state.user.points >= this.state.items.moon.price) {
      this.state.user.points -= this.state.items.moon.price;
      this.setState({
        user: {
          ...this.state.user,
          properties: { power: this.state.user.properties.power += this.state.items.moon.power }
        },
        items: {
          ...this.state.items,
          moon: {
            ...this.state.items.moon,
            price: this.state.items.moon.price += Math.round(this.state.items.moon.price / 2)
          }
        }
      });
    } else if (this.state.user.points >= this.state.items.moon.price) {

      this.state.user.points -= this.state.items.moon.price;

      this.setState({
        moonBought: true,
        user: {
          ...this.state.user,
          properties: { power: this.state.user.properties.power += this.state.items.moon.power }
        },
        items: {
          ...this.state.items,
          moon: {
            ...this.state.items.moon,
            price: this.state.items.moon.price += this.state.items.moon.price / 2
          }
        }
      });

      cookie.save('moonBought', true, { path:'/' });

    } else {
      alert('You don\'t have money for that');
    }

    cookie.save('power', this.state.user.properties.power, { path:'/' });
    cookie.save('moonPrice', this.state.items.moon.price, { path: '/' });
    cookie.save('points', this.state.user.points, { path:'/' });
  }

  openMoonUpgrade() {
    this.setState({
      moonUpgradeOpened: this.state.moonUpgradeOpened === true ? false : true
    });
  }

  render() {

    const playerPoints = <h1>{this.state.user.points} &nbsp;$</h1>;


    // moon
    const moonbtnName = this.state.items.moon.name + ' ' + this.state.items.moon.price + '$';

    const shopMoon = this.state.moonBought === false ? (
      <div>
        <img src={normalMoonImg} height='40px' width='40px'/>
        <button onClick={ this.moonBuy.bind(this) } type="button" className="btn btn-outline-primary space">{ moonbtnName }</button>
      </div>
    ) : (
      <div>
        <img src={normalMoonImg} height='40px' width='40px'/>
        <button type="button" className="btn btn-outline-primary space" disabled>{ this.state.items.moon.name } (Bought)</button>
      </div>
    );

    const moonBtnUpdater = (
      <button onClick={ this.moonBuy.bind(this) } type="button" className="btn btn-outline-primary space">{ moonbtnName }</button>
    );

    const moonUgrade = this.state.moonUpgradeOpened === true ? (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{ this.state.items.moon.name } - Upgrade</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Your moon power: <span class="badge badge-dark">{ this.state.user.properties.power }</span>
            <br/>
            { moonBtnUpdater }
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={ this.openMoonUpgrade.bind(this) }>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    ) : <div></div>

    const moonObject = this.state.moonBought === true ? (
      <img className="img-fluid"
        src={ normalMoonImg }
        height={ this.state.items.moon.height }
        width={ this.state.items.moon.width }
        style={ { cursor: 'pointer' } }
        onClick ={ this.openMoonUpgrade.bind(this) }
      />
    ) : <div></div>;


    // Shop Viewer

    const shopViewer = this.state.shopOpened != false ? (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Shop</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            { shopMoon }
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={ this.openShop.bind(this) }>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
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
      { moonUgrade }
    </div>

    );
  }
}
