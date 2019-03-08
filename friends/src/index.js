import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { SUCCESS, LOADING, ERROR } from './action/action';

const initialState = {
    friends: [],
    loading: false,
    error: null
}

export const reducer = ( state = initialState, action ) => {
    switch(action.type){

    case LOADING: 
        return { ...state, loading: true };

    case SUCCESS:
        return { ...state, loading: false, friends: action.payload, error: ''}
    
    case ERROR: 
        return { ...state, loading: false, friends: [], error: action.payload }

    default: 
        return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, document.getElementById('root'));

