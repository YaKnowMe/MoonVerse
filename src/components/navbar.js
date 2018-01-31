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
        auth: ['Login', 'Register', 'reset'],
        settings: 'Settings'
      }
    }
  }

  render() {

    const authPages = this.state.options.auth;

    const authmenu = this.props.signed !== true ? authPages.map(page => {
      return (
        <li className="nav-item">
          <a className="nav-link">
            <Link to={ '/' + page }>{ page }</Link>
          </a>
        </li>
      );
    }) :  <Greeter/>

    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand">
            <Link to={'/'}>
              <img className="Logo" src={ Logo } height={ this.state.logo.height } width={ this.state.logo.width }/>
              { this.state.title }
            </Link>
          </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            { authmenu }
          </ul>
        </div>
      </nav>
    </div>
    );
  }
}

Navbar.defaultProps = {
  signed: false
}
