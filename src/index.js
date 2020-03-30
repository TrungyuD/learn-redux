import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers';
import Root from './Root'
const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );
    console.log(store.getState());
    
ReactDOM.render((
    <Root store={store} />
),document.getElementById('root'));
serviceWorker.unregister();
