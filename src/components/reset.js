import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Navbar } from '../components/navbar';
import '../sass/App.css';


class Reset extends Component {

  componentDidMount() {
    cookie.remove('points');
    cookie.remove('moonBought');
    cookie.remove('power');
    cookie.remove('moonPrice');
    window.location.href = '/';
  }

  render() {
    return (
      <div className="App container-fluid">
        {/*Navbar*/}
        <Navbar/>
        <h1>Reseting...</h1>
      </div>
    );
  }
}


export default Reset;
