import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(promise(), thunk, logger));

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root'));
