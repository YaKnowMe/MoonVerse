import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Navbar } from '../components/navbar';
import '../sass/App.css';


class Reset extends Component {

  componentDidMount() {
    cookie.remove('points');
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
