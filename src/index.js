import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// redux
import configureStore from './store/configureStore';
// react-redux
import {Provider} from 'react-redux';


// using Redux, we create our store.
const store = configureStore();

render(
    // react-redux Provider Component at the application root.
    // This magically makes the store available to all your container components in the app without having to pass it explicitly.
    // <Provider /> accepts one parameter - the store we created with redux
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
