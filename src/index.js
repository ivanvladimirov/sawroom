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

ReactDOM.render((
    <Router history={history}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/tables" component={Tables} />
            <Route path="/emails" component={Emails} />
            <Route path="/invoice" component={Invoice} />
            <Route path="/files" component={Files} />
            <Route path="/faq" component={FAQ} />
            <Route path="/graphs" component={Graphs} />
            <Route path="/game" component={Game} />
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
