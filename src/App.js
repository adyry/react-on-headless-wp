import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {url, RouteWithProps} from './_shared'


import Projects from './Projects'
import Photos from './Photos'
import Music from './Music'
import Other from './Other'

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Dev Portfolio</Link></li>
                        <li><Link to="/music">Music</Link></li>
                        <li><Link to="/photos">Photos</Link></li>
                        <li><Link to="/other">Other</Link></li>
                    </ul>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/portfolio" component={Projects} />
                    <Route exact path="/music" component={Music} />
                    <Route exact path="/photos" component={Photos} />
                    <Route exact path="/other" component={Other} />
                    {/*<RouteWithProps path="/about" component={Projects} foo={"bar"} />*/}

                    <aside>
                        <Route exact path="/music" component={Other} />
                    </aside>
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