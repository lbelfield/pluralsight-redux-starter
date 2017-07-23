import * as types from '../actionCreators/actionTypes';
import initialState from './initialState';

// remember, all our thunks dispatch a success action when they complete. 
// actionTypes we have are: LOAD_COURSES_SUCCESS, CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS, LOAD_AUTHORS_SUCCESS and BEGIN_AJAX_CALL
// This means we can use the _SUCCESS suffix as a signal that the action has completed.
// in other words, it's a way of checking whether the API call and AJAX call has ended or been successful.
function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

// this file will track ajax status' in our Redux Store
// So we need to know when begun and when ended
export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    // note: instead of switch, using an if statement for this reducer - no difference, just smaller.

    // checks when the ajax call has begun 
    if(action.type == types.BEGIN_AJAX_CALL) {
        // add 1 to the initialState's ajaxCallsInProgress, which is set to 0 initially
        return state + 1;
    }
    // checks when the ajax call has ended using a function at top of file
    else if (actionTypeEndsInSuccess(action.type)) {
        return state -1;
    }

    return state;
}