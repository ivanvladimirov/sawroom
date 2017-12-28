import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';

// Includes
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/css/layout.css';

// Main Layouts
import MainLayout from './Layouts/MainLayout.jsx';
import NotFound from './Layouts/NotFound.jsx';

// Used Components in Routes
import Logo from './Components/Logo/';

// Variables
const history = createHistory();

ReactDOM.render((
    <Router history={history}>
        <Route component={MainLayout}>
            <Route path="/" />
            <Route path="/logo" component={Logo} />
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
