import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// this is my Action Creator for loadCoursesSuccess(), used in my thunk
export function loadCoursesSuccess(courses) {
    // it returns an Action
    // remember, Actions must have a type.
    // for this Action, I'm just passing course data
    return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

// loadCourses() is a thunk!
// the asynchronous promise will be inside our thunk
// remember, thunk always returns a function that accepts a dispatch
export function loadCourses() {
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}


// saveCourse is identical to above, with one exception...
// if the id is new, we want to create a new course, using createCourseSuccess
// if the id already exists, we want to update the course, using updateCourseSuccess
export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course: course };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course: course };
}

export function saveCourse(course) {
    return function(dispatch, getState) {
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw(error);
        });
    };
}
