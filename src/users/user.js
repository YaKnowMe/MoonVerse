import React, { Component } from 'react';
import { Planet } from '../planets/planet';

export class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: 'Anonymous',
        points: 0
      },
      planet: {
        scale: 1,
        height: "500px",
        width: "500px"
      }
    };
  }

}
