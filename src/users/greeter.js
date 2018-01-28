import React, { Component } from 'react';
import { User } from '../users/user';

export class Greeter extends User {
  render() {
    return(
      <div className="siimple-grid-row">
        <div className="siimple-grid-col siimple-grid-col--12">
          <h1>Hello {this.state.user.username}</h1>
        </div>
      </div>
    );
  }
}
