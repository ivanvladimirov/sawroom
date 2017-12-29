import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidenav extends Component {
  render() {
    return (
        <nav className="sidenav">
          <div className="small">Navigation</div>
          <NavLink exact={true} activeClassName="menu-active" to="/">
            <i className="fa fa-home fa-menu" aria-hidden="true"></i> 
              Home
            <i className="fa fa-chevron-right fa-menu-arrow" aria-hidden="true"></i>
          </NavLink>

          <NavLink activeClassName="menu-active" to="/reservations">
            <i className="fa fa-users fa-menu" aria-hidden="true"></i>
              Reservations
            <i className="fa fa-chevron-right fa-menu-arrow" aria-hidden="true"></i>
          </NavLink>

          <NavLink activeClassName="menu-active" to="/tables">
            <i className="fa fa-trello fa-menu" aria-hidden="true"></i>
              Tables
            <i className="fa fa-chevron-right fa-menu-arrow" aria-hidden="true"></i>
          </NavLink>

          <NavLink activeClassName="menu-active" to="/emails">
            <i className="fa fa-envelope fa-menu" aria-hidden="true"></i>
              Emails
            <i className="fa fa-chevron-right fa-menu-arrow" aria-hidden="true"></i>
          </NavLink>

          <NavLink activeClassName="menu-active" to="/invoice">
            <i className="fa fa-print fa-menu" aria-hidden="true"></i>
              Invoice
            <i className="fa fa-chevron-right fa-menu-arrow" aria-hidden="true"></i>
          </NavLink>

          <NavLink activeClassName="menu-active" to="/files">
            <i className="fa fa-file fa-menu" aria-hidden="true"></i>
              Files
            <i className="fa fa-chevron-right fa-menu-arrow" aria-hidden="true"></i>
          </NavLink>

          <NavLink activeClassName="menu-active" to="/faq">
            <i className="fa fa-comment fa-menu" aria-hidden="true"></i>
              FAQ
            <i className="fa fa-chevron-right fa-menu-arrow" aria-hidden="true"></i>
          </NavLink>

          <NavLink activeClassName="menu-active" to="/graphs">
            <i className="fa fa-pie-chart fa-menu" aria-hidden="true"></i>
              Graphs
            <i className="fa fa-chevron-right fa-menu-arrow" aria-hidden="true"></i>
          </NavLink>

          <NavLink activeClassName="menu-active" to="/game">
            <i className="fa fa-gamepad fa-menu" aria-hidden="true"></i>
              Game
            <i className="fa fa-chevron-right fa-menu-arrow" aria-hidden="true"></i>
          </NavLink>
        </nav>
    );
  }
}

export default Sidenav;
