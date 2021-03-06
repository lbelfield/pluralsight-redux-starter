import * as types from '../actionCreators/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        case types.DELETE_AUTHORS_SUCCESS: {

            const authorToDelete = state.filter(a => a.id == action.authorId)[0];
            const index = state.indexOf(authorToDelete);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        }

        case types.CREATE_AUTHOR_SUCCESS: {
            return [
                ...state,
                Object.assign({}, action.author)           
            ];
        }

        case types.UPDATE_AUTHOR_SUCCESS: {
            return [
                ...state.filter(a => a.id !== action.author.id),
                Object.assign({}, action.author)
            ];
        }
                   
        default:
            return state;

    }
}