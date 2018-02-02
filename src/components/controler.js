import React, { Component } from 'react';
import cookie from 'react-cookies';

export class Controler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopOpened: false,

      moonBought: cookie.load('moonBought') != undefined ? cookie.load('moonBought') === 'true' ? true : false : false,

      user: {
        username: 'Anonymous',
        points: Number(cookie.load('points') != undefined ? cookie.load('points') : '0'),
        properties: {
          power: Number(cookie.load('power') != undefined ? cookie.load('power') : '1')
        }
      },
      planet: {
        loaded: false,
        scale: 1,
        height: '500px',
        width: '500px'
      },
      items: {
        moon: {
          name: 'Moon',
          price: 150,
          power: 2,
          height: '150px',
          width: '150px',
          position: {
            x: 330,
            y: -560
          }
        }
      }
    };
  }

}
