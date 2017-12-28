import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidenav extends Component {
  render() {
    return (
        <nav className="sidenav">
          <div className="small">Navigation</div>
          <NavLink exact={true} activeClassName="menu-active" to="/">
            <i className="fa fa-home fa-menu" aria-hidden="true"></i> 
            <span>Home</span> 
            <i className="fa fa-chevron-left fa-menutwo" aria-hidden="true"></i>
          </NavLink>
          <NavLink activeClassName="menu-active" to="/logo"><i className="fa fa-users fa-menu" aria-hidden="true"></i> Reservations</NavLink>
          <NavLink to="/"><i className="fa fa-trello fa-menu" aria-hidden="true"></i> Tables</NavLink>
          <NavLink to="/"><i className="fa fa-envelope fa-menu" aria-hidden="true"></i> Emails</NavLink>
          <NavLink to="/"><i className="fa fa-print fa-menu" aria-hidden="true"></i> Invoice</NavLink>
          <NavLink to="/"><i className="fa fa-file fa-menu" aria-hidden="true"></i> Files</NavLink>
          <NavLink to="/"><i className="fa fa-comment fa-menu" aria-hidden="true"></i> FAQ</NavLink>
          <NavLink to="/"><i className="fa fa-pie-chart fa-menu" aria-hidden="true"></i> Graphs</NavLink>
          <NavLink to="/"><i className="fa fa-gamepad fa-menu" aria-hidden="true"></i> Game</NavLink>
        </nav>
    );
  }
}

export default Sidenav;
