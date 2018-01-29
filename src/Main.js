import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Planet } from './planets/planet';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import App from './App';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ App }/>
      <Route path='/Login' component={ Login }/>
      <Route path='/Register' component={ Register }/>
      <Route path='*' component={ NotFound }/>
    </Switch>
  </main>
);

export default Main;
