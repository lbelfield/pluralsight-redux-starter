import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// this is my Action Creator for loadCoursesSuccess(), used in my thunk
export function loadCoursesSuccess(courses) {
    debugger;
    // it returns an Action
    // remember, Actions must have a type.
    // for this Action, I'm just passing course data
    return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

// loadCourses() is a thunk!
// the asynchronous promise will be inside our thunk
// remember, thunk always returns a function that accepts a dispatch
export function loadCourses() {
    debugger;
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            debugger;
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}
