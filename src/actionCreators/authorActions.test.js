// NOTE This file ONLY tests Thunks.

import expect from 'expect';
import * as authorActions from './authorActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'; // configure a mock store
//import nock from 'nock'; // for mocking HTTP calls - not needed as using a mock api

// create our mockStore using the redux-mock-store library and thunk
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Author Actions - Thunks Only - Async Actions', () => {

    it('should create BEGIN_AJAX_CALL and LOAD_AUTHORS_SUCCESS when loading authors', (done) => {
        // Arrange
        // Test data for Actions
        const actions = [
            { type: types.BEGIN_AJAX_CALL },
            { type: types.LOAD_AUTHORS_SUCCESS }
        ];

        // use the store set above, and give it initial state and the actions
        const store = mockStore({courses: []}, actions);

        // Act - invoking loadAuthors() thunk from authorActions
        store.dispatch(authorActions.loadAuthors())
            .then(() => {

                // redux-mock-store allows us to get our actions via the store
                const actions = store.getActions();

                // Assert 
                // within loadAuthors() thunk, two actions are dispatched:
                // first Action Creator to be dispactched is beginAjaxCall(),
                // which holds the Action BEGIN_AJAX_CALL
                expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
                // first Action Creator to be dispactched is loadAuthorsSuccess(),
                // which holds the Action LOAD_AUTHORS_SUCCESS
                expect(actions[1].type).toEqual(types.LOAD_AUTHORS_SUCCESS);
                done();
        });
    });
});
