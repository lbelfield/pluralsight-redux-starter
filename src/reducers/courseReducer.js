import * as types from '../actionCreators/actionTypes';

// this is our reducer that takes in an (empty) state and an action
export default function courseReducer(state = [], action) {

    // switch statement to check which action we want. 
    // Remember, an action must have a type. 
    // This is why - so we can filter which action we want to use. 
    switch(action.type) {

        // we want to filter only our LOAD_COURSES_SUCCESS' action
        case types.LOAD_COURSES_SUCCESS:
            // Usually, to stay immutable, we'd need the Spread Operator & Object.assign: 
            // Spread Operator (...state) takes all the values in the array, and maps them. 
                // Similar to initialising an object within a ctor.
            // Object.assign creates a deep copy of the object that was passed in.

            // however, in this case, we are using an async call and api, so no need to amend
            // what we have, so can just return the result:
            return action.courses;

        default: 
            return state;
    }
}