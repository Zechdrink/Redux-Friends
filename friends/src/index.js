import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {
    friends: []
}

const reducer = ( state = initialState, action ) => {
    return state;
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, document.getElementById('root'));

