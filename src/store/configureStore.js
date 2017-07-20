import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    // createStore takes in three parameters
        // 1 is our rootReducer (reducers/index.js) that combines all of our reducers
        // 2 is the initial state, which was passed in
        // 3 is applyMiddleware got from 'redux'. It provides a third party extension point between dispatching an action and reducers.
            // need to add thunk, which handles asynchronous calls. Note this is used in ActionCreators
            // reduxImmutableStateInvariant detects whether there is mutable code (which would be bad)
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
        );
}