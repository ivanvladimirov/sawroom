import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Route } from 'react-router';

import Header from '../Components/Header/';
import Sidenav from '../Components/Sidenav/';
import Logo from '../Components/Logo/';
class Main extends Component {
  render() {
    return (
        <div>
          <Header />
          <div className='MainLayout'>
            <Sidenav />
            <div className='container'>
              <Route exact path='/logo' component={Logo} />
            </div>
          </div>
        </div>
    );
  }
}

export default Main;
