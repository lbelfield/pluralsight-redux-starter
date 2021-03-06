import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage'; //eslint-disable-line import/no-named-as-default
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import AuthorsPage from './components/authors/AuthorsPage'; //eslint-disable-line import/no-named-as-default
import ManageAuthorPage from './components/authors/ManageAuthorPage'; //eslint-disable-line import/no-named-as-default

export default (
    // by placing app at the top, we are saying always load the app component 
    // and then nest these other items pass them as children based on our routing
    // eg if a /about URL comes in, then AboutPage will be passed as a child to our App component 
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="about" component={AboutPage} />
        <Route path="authors" component={AuthorsPage} />
        <Route path="author" component={ManageAuthorPage} />
        <Route path="author/:id" component={ManageAuthorPage} />        
    </Route>
);
