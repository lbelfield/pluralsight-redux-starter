import * as types from '../actionCreators/actionTypes';
import initialState from './initialState';

// this is our reducer that takes in an (empty) state and an action
export default function courseReducer(state = initialState.courses, action) {

    // switch statement to check which action we want. 
    // Remember, an action must have a type. 
    // This is why - so we can filter which action we want to use. 
    switch(action.type) {

        // we want to filter only our LOAD_COURSES_SUCCESS action
        case types.LOAD_COURSES_SUCCESS:
            // Usually, to stay immutable, we'd need the Spread Operator & Object.assign: 
            // Spread Operator (...state) takes all the values in the array, and maps them. 
                // Similar to initialising an object within a ctor.
            // Object.assign creates a deep copy of the object that was passed in.

            // however, in this case, we are using an async call and api, so no need to amend
            // what we have, so can just return the result:
            return action.courses;
        
        
        // we want to filter only on CREATE_COURSE_SUCCESS action
        case types.CREATE_COURSE_SUCCESS:

            // the below two lines feel right, but remember, we need to keep this IMMUTABLE!! So use Object.assign and Spread Operator
                // state.push(action.course);
                // return state;

            // Spread Operator (...state) takes all the values in the array, and maps them into a new array.
                // this is handy, because it is creating an exact copy of something we want but can't use, as using it would be mutable.
                // so instead, it creates a brand new copy, mapping every property - similar to initialising an object within a ctor.

            // Object.assign creates a deep copy of the object that was passed in, changing just the action.courses.

            // Remember, the state variable represents just an array of courses - It's a specific slice of our entire store.
            // So this reducer is ONLY handling an array of courses
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        

        // we want to filter only on UPDATE_COURSE_SUCCESS action
        case types.UPDATE_COURSE_SUCCESS:

            // Again, since state is immutable, we can't simply change the appropriate index in the array. 
            // Instead, we use the filter() to get a list of all the courses except for the course that's being updated. 
            // We slap the spread operator on the front, which is what creates a brand-new array out of the filtered results that are returned from filter. 
            
            // Use Object.assign to create a copy of the course passed in and include it in the array that we're returning.
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];

        default: 
            return state;
    }
}