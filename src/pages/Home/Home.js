import React, { Component } from 'react';
import { Game } from '../../game/main';
import { Navbar } from '../../components/navbar';
import '../../sass/App.css';


class Home extends Component {

  render() {
    return (
      <div className="App container-fluid">
        {/*Navbar*/}
        <Navbar/>
        {/*Planet/User settings*/}
        <Game/>

      </div>
    );
  }
}


export default Home;
