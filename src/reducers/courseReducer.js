import * as types from '../actionCreators/actionTypes';

// this is our reducer that takes in an (empty) state and an action
export default function courseReducer(state = [], action) {

    // switch statement to check which action we want. 
    // Remember, an action must have a type. This is why - so we can filter which action we want to use. 
    switch(action.type) {

        // we want to filter only our CREATE_COURSE' action
        case types.CREATE_COURSE:
            // the below two lines feel right, but remember, we need to keep this IMMUTABLE!! So use Object.assign and Spread Operator
            // state.push(action.course);
            // return state;

            // Spread Operator (...state) takes all the values in the array, and maps them. Similar to initialising an object within a ctor.
            // Object.assign creates a deep copy of the object that was passed in.
            return [
                ...state, 
                Object.assign({}, action.course)
                ];

        default: 
            return state;
    }
}