import React, { Component } from 'react';
import Logo from '../Logo/';

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <div className="heading">
          SawRoom
        </div>
      </header>
    );
  }
}

export default Header;
