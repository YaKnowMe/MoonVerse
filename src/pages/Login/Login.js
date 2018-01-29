import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Navbar} from '../../controler/navbar';
import '../../sass/App.css';


const LoginRoute = () => (
  <Switch>
    <Route exact path='/Login' component={ Login }/>
  </Switch>
);

class Login extends Component {

  render() {
    return (
      <div className="App">
        {/*Navbar*/}
        <Navbar/>
        {/*W.I.P*/}
        <h1>Login will be here</h1>
      </div>
    );
  }
}


export default LoginRoute;
