import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose } from 'redux';
import allReducer from './reducers';
import rootSaga from './sagas';
import Root from './Root'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    allReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    console.log(store.getState());

sagaMiddleware.run(rootSaga);

ReactDOM.render((
    <Root store={store} />
),document.getElementById('root'));
serviceWorker.unregister();
