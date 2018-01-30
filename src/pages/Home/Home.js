import React, { Component } from 'react';
import { Planet } from '../../planets/planet';
import { Navbar } from '../../controler/navbar';
import '../../sass/App.css';


class Home extends Component {

  render() {
    return (
      <div className="App container-fluid">
        {/*Navbar*/}
        <Navbar/>
        {/*Planet/User settings*/}
        <Planet/>

      </div>
    );
  }
}


export default Home;
