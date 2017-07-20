import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

// this is my Action Creator for loadAuthorsSuccess(), used in my thunk
export function loadAuthorsSuccess(authors) {
    // it returns an Action
    // remember, Actions must have a type.
    // for this Action, I'm just passing course data
    return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

// loadAuthors() is a thunk!
// the asynchronous promise will be inside our thunk
// remember, thunk always returns a function that accepts a dispatch
export function loadAuthors() {
    return function(dispatch) {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}
