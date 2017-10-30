import React from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from '../containers/App';

import '../scss/LandingPage.css';

export default class LandingPage extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() =>
                        <div className="LandingPage">
                            <ul className="LandingPage__menu">
                                <li><Link to="/portfolio">Dev Portfolio</Link></li>
                                <li><Link to="/music">Music</Link></li>
                                <li><Link to="/photos">Photos</Link></li>
                                <li><Link to="/other">Other</Link></li>
                            </ul>
                        </div>}/>
                    <Route component={App}/>
                </Switch>
            </Router>
        );
    }
}