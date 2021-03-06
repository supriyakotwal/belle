import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router
} from "react-router-dom";
import App from './App';
import store from './store';
import history from './history';
ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Router history={history}>
                    <App/>
                </Router>
            </Provider>
        </React.StrictMode>,
    document.getElementById("root")
);