import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {url, RouteWithProps} from '../_shared'


import Projects from './Projects'
import Photos from './Photos'
import Music from './Music'
import Other from '../components/Other'

import '../scss/App.css';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App__menu-wrapper">
                        <ul className="App__menu">
                            <li><Link to="/portfolio">Dev Portfolio</Link></li>
                            <li><Link to="/music">Music</Link></li>
                            <li><Link to="/photos">Photos</Link></li>
                            <li><Link to="/other">Other</Link></li>
                        </ul>
                    </div>
                    <div className="App__content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/portfolio" component={Projects} />
                        <Route exact path="/music" component={Music} />
                        <Route exact path="/photos" component={Photos} />
                        <Route exact path="/other" component={Other} />
                        {/*<RouteWithProps path="/about" component={Projects} foo={"bar"} />*/}
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);