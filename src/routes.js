import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    // by placing app at the top, we are saying always load the app component 
    // and then nest these other items pass them as children based on our routing
    // eg if a /about URL comes in, then AboutPage will be passed as a child to our App component 
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
