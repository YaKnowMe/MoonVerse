import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';

// Functions
import Reset from './components/reset.js';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/Login" component={ Login }/>
            <Route path="/Register" component={ Register }/>
            <Route path="/reset" component={ Reset }/>
            <Route component={ NotFound }/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
