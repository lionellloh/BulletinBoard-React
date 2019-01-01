import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Board from './Board';
import Box from './index'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Note />, document.getElementById('root'));
ReactDOM.render(<Board count={50} />, document.getElementById('root'));
// ReactDOM.render(<Box/>, document.getElementById('react-container'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
