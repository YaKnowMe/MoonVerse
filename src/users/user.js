import React, { Component } from 'react';

export class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: 'Anonymous',
        points: 0
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
