import React, { Component } from 'react';
import cookie from 'react-cookies';

export class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: 'Anonymous',
        points: Number(cookie.load('points') != undefined ? cookie.load('points') : '0')
      },
      planet: {
        loaded: false,
        scale: 1,
        height: '500px',
        width: '500px'
      }
    };
  }
}
