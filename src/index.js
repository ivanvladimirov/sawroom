import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';

// Includes
import './Assets/css/MainLayout.css';
import './Assets/css/LoginLayout.css';

// Main Layouts
import MainLayout from './Layouts/MainLayout.jsx';
import LoginLayout from './Layouts/LoginLayout.jsx';

// Views
import Home from './Views/Home/';
import Reservations from './Views/Reservations/';
import Tables from './Views/Tables/';
import Emails from './Views/Emails/';
import Invoice from './Views/Invoice/';
import Files from './Views/Files/';
import FAQ from './Views/FAQ/';
import Graphs from './Views/Graphs/';
import Game from './Views/Game/';

// Variables
const history = createHistory();

const DashboardRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <MainLayout>
            <Component {...matchProps} />
        </MainLayout>
      )} />
    )
  };

  const LoginRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <LoginLayout>
            <Component {...matchProps} />
        </LoginLayout>
      )} />
    )
  };

ReactDOM.render((
    <Router history={history}>
        <Switch>
            <LoginRoute path="/login" component={LoginLayout} />
            <DashboardRoute path="/" />
        </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
