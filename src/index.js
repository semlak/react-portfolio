import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import 'bootstrap/dist/css/bootstrap.css';
// import './bootstrap-material-design.min.css';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
render(<App />, document.getElementById('root'));
// registerServiceWorker();
// unregister();
