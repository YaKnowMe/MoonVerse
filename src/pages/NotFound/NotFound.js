import React, { Component } from 'react';
import {Navbar} from '../../components/navbar';
import '../../sass/App.css';


class NotFound extends Component {

  render() {
    return (
      <div className="App container-fluid">
        {/*Navbar*/}
        <Navbar/>
        {/*W.I.P*/}
        <h1>404 will be here</h1>
      </div>
    );
  }
}


export default NotFound;
