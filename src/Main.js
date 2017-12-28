import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

// Components
import Header from './Components/Header/Header';
import Sidenav from './Components/Sidenav/Sidenav';
import Logo from './Components/Logo/Logo';

// Includes
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/css/layout.css';

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className='MainLayout'>
            <Sidenav />
            <Route exact path='/logo' component={Logo} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
