import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import HomeRouter from './components/LandingPage';
import './scss/index.css'

ReactDOM.render(<HomeRouter />, document.getElementById('root'));

registerServiceWorker();
