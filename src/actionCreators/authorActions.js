import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

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

        // adding our beginAjax to our thunk, for loading
        dispatch(beginAjaxCall());

        return AuthorApi.getAllAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function deleteAuthorsSuccess(authorId) {
    return { type: types.DELETE_AUTHORS_SUCCESS, authorId: authorId };
}

export function deleteAuthor(authorId) {

    return function(dispatch, getState){

        dispatch(beginAjaxCall());

        return AuthorApi.deleteAuthor(authorId)
            .then(() => {
                dispatch(deleteAuthorsSuccess(authorId));
            })
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}

export function updateAuthorSuccess(author) {
    return {type: types.UPDATE_AUTHOR_SUCCESS, author: author};
}

export function createAuthorSuccess(author) {
    return {type: types.CREATE_AUTHOR_SUCCESS, author: author};
}

export function saveAuthor(author) {
    return function(dispatch) {

        dispatch(beginAjaxCall());

        return AuthorApi.saveAuthor(author)
            .then(a => {
                author.id ? dispatch(updateAuthorSuccess(a)) : dispatch(createAuthorSuccess(a));
            })
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
