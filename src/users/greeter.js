import React, { Component } from 'react';
import { User } from '../users/user';

export class Greeter extends User {
  render() {
    return(
          <a class="siimple-navbar-link">Hello {this.state.user.username}</a>
    );
  }
}
