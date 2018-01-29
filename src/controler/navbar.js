import React, { Component } from 'react';
import Logo from '../assets/logo.png';
import { Greeter } from '../users/greeter';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'MoonVerse!',
      logo: {
        height: '16px',
        width: '16px'
      },
      options: {
        auth: ['Login', 'Register'],
        settings: 'Settings'
      }
    }
  }

  render() {

    const authPages = this.state.options.auth;

    const authmenu = this.props.signed !== true ? authPages.map(page => {
      return (
        <a className="siimple-navbar-link">
          <Link to={ '/' + page }>{ page }</Link>
        </a>
      );
    }) :  <Greeter/>

    return(
      <div>
        <div className="siimple-navbar">
          <div className="siimple-layout--left">

            <a className="siimple-navbar-title">
              <img className="App-logo" src={ Logo } height={ this.state.logo.height } width={ this.state.logo.width }/>
              { this.state.title }
            </a>
          </div>
          <div className="siimple-layout--right">

            { authmenu }

          </div>
        </div>
      </div>
    );
  }
}

Navbar.defaultProps = {
  signed: false
}
