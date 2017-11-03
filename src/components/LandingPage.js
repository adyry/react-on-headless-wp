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
                                <li className="LandingPage__li"><Link to="/portfolio" className="LandingPage__link">Dev Portfolio</Link></li>
                                <li className="LandingPage__li"><Link to="/music" className="LandingPage__link">Music</Link></li>
                                <li className="LandingPage__li"><Link to="/photos" className="LandingPage__link">Photos</Link></li>
                                <li className="LandingPage__li"><Link to="/other" className="LandingPage__link">Other</Link></li>
                            </ul>
                        </div>}/>
                    <Route component={App}/>
                </Switch>
            </Router>
        );
    }
}