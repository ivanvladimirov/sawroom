import React, { Component } from 'react';
import { Route } from 'react-router';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

// Views
import Home from './../../Views/Home/';
import Reservations from './../../Views/Reservations/';
import Tables from './../../Views/Tables/';
import Emails from './../../Views/Emails/';
import Invoice from './../../Views/Invoice/';
import Files from './../../Views/Files/';
import FAQ from './../../Views/FAQ/';
import Graphs from './../../Views/Graphs/';
import Game from './../../Views/Game/';

const routes = {
  '/': 'Home',
  '/reservations': 'Reservations',
  '/tables': 'Tables',
  '/emails': 'Emails',
  '/invoice': 'Invoice',
  '/files': 'Files',
  '/faq': 'FAQ',
  '/graphs': 'Graphs',
  '/game': 'Game'
}

class Content extends Component {
  render() {
    return (
        <div className="content">
          <div className="breadcrumbContainer">
            <div className="container">
              <Breadcrumbs 
              WrapperComponent={(props) => <div className="breadcrumbs">{props.children}</div>} 
              ActiveLinkComponent={(props) => <span className="pageTitle">{props.children}</span>}
              LinkComponent={(props) => ''}
              mappedRoutes={routes} />
              <Breadcrumbs 
              WrapperComponent={(props) => <div className="breadcrumbs">{props.children}</div>}
              LinkComponent={(props) => <span>{props.children}</span>} 
              ActiveLinkComponent={(props) => <span className="breadcrumbsItem">{props.children}</span>}
              mappedRoutes={routes} />
            </div>
          </div>
            <div className="container">
              <div className='contentWrapper'>
                <Route exact path='/' component={Home} />
                <Route path="/reservations" component={Reservations} />
                <Route path="/tables" component={Tables} />
                <Route path="/emails" component={Emails} />
                <Route path="/invoice" component={Invoice} />
                <Route path="/files" component={Files} />
                <Route path="/faq" component={FAQ} />
                <Route path="/graphs" component={Graphs} />
                <Route path="/game" component={Game} />
              </div>
            </div>
          </div>
          );
  }
}

export default Content;
