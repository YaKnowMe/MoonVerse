import React, { Component } from 'react';
import { Controler } from './controler';

export class Greeter extends Controler {
  render() {
    return(
          <a class="siimple-navbar-link">Hello {this.state.user.username}</a>
    );
  }
}
