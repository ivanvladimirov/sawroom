import React, { Component } from 'react';
import { Route } from 'react-router';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

// Components
import Header from './../Components/Header/';
import Sidenav from './../Components/Sidenav/';
import Logo from './../Components/Logo/';
import Content from './../Components/Content/';
class MainLayout extends Component {
  render() {
    return (
        <div>
          <Header />
          <div className='MainLayout'>
            <Sidenav />
            <Content />
          </div>
        </div>
    );
  }
}

export default MainLayout;
