// our root reducer
// this merges all of our reducers into one place to get any of the props needed.

import {combineReducers} from 'redux';

// note we have aliased our reducers so throughout our application, they make sense.
import courses from './courseReducer';
import authors from './authorReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses: courses,
    authors: authors,
    ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;