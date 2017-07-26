// NOTE This file ONLY tests Thunks.
// For Actions, see courseActions.action.test.js

import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'; // configure a mock store
//import nock from 'nock'; // for mocking HTTP calls - not needed as using a mock api

// create our mockStore using the redux-mock-store library and thunk
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Course Actions - Thunks Only - Async Actions', () => {

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        // Arrange
        // Test data for Actions
        const actions = [
            { type: types.BEGIN_AJAX_CALL },
            { type: types.UPDATE_COURSE_SUCCES },
            { type: types.CREATE_COURSE_SUCCESS },
            {
                type: types.LOAD_COURSES_SUCCESS, 
                body: {
                    courses: [{
                        id: 'clean-code',
                        title: 'Clean code'
                    }]
                }
            }
        ];

        // use the store set above, and give it initial state and the actions
        const store = mockStore({courses: []}, actions);

        // Act - invoking loadCourses() thunk from courseActions
        store.dispatch(courseActions.loadCourses())
            .then(() => {

                // redux-mock-store allows us to get our actions via the store
                const actions = store.getActions();

                // Assert 
                // within loadCourses() thunk, two actions are dispatched:
                // first Action Creator to be dispactched is beginAjaxCall(),
                // which holds the Action BEGIN_AJAX_CALL
                expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
                // second Action Creator to be dispactched is loadCoursesSuccess(),
                // which holds the Action LOAD_COURSES_SUCCESS
                expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
                done();
        })
    })

    it('should create BEGIN_AJAX_CALL and CREATE_COURSES_SUCCESS when saving courses', (done) => {
        // Arrange
        // Test data for Actions
        const actions = [
            { type: types.BEGIN_AJAX_CALL },
            { type: types.UPDATE_COURSE_SUCCES },
            { type: types.CREATE_COURSE_SUCCESS },
            { type: types.LOAD_COURSES_SUCCESS }
        ];

        // no id when creating a course to bypass our ternary operator 
        // so we dispatch Action Creator createCourseSuccess()
        const course = {watchHref: '', title: 'React Tutorial', authorId: 'cory-house', length: '2:00', category: 'React'};

        // use the store set above, and give it initial state and the actions
        const store = mockStore({courses: []}, actions);

        // Act - invoking saveCourse() thunk from courseActions, passing in our course
        store.dispatch(courseActions.saveCourse(course))
            .then(() => {

                // redux-mock-store allows us to get our actions via the store
                const actions = store.getActions();

                // Assert 
                // within saveCourses() thunk, two actions are dispatched:
                // first Action Creator to be dispactched is beginAjaxCall(),
                // which holds the Action BEGIN_AJAX_CALL
                expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
                // second Action Creator to be dispactched is createCourseSuccess(),
                // which holds the Action CREATE_COURSE_SUCCESS
                expect(actions[1].type).toEqual(types.CREATE_COURSE_SUCCESS);
                done();
        })
    })



    it('should create BEGIN_AJAX_CALL and CREATE_COURSES_SUCCESS when saving courses', (done) => {
        // Arrange
        // Test data for Actions
        const actions = [
            { type: types.BEGIN_AJAX_CALL },
            { type: types.CREATE_COURSE_SUCCESS },
            { type: types.LOAD_COURSES_SUCCESS },
            {
                type: types.UPDATE_COURSE_SUCCESS,
                body: {
                    courses: [{
                        id: '1',
                        title: 'Clean code'
                    }]
                }
            }
        ];

        // id when updating a course to bypass our ternary operator 
        // so we dispatch Action Creator updateCourseSuccess()
        const course = {id: '1', watchHref: '', title: 'React Tutorial', authorId: 'cory-house', length: '2:00', category: 'React'};

        // use the store set above, and give it initial state and the actions
        const store = mockStore({courses: []}, actions);

        // Act - invoking saveCourse() thunk from courseActions and pass in course
        store.dispatch(courseActions.saveCourse(course))
            .then(() => {

                // redux-mock-store allows us to get our actions via the store
                const actions = store.getActions();

                // Assert 
                // within saveCourses() thunk, two actions are dispatched:
                // first Action Creator to be dispactched is beginAjaxCall(),
                // which holds the Action BEGIN_AJAX_CALL
                expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
                // second Action Creator to be dispactched is updateCourseSuccess(),
                // which holds the Action UPDATE_COURSE_SUCCESS
                expect(actions[1].type).toEqual(types.UPDATE_COURSE_SUCCESS);
                done();
        })
    })
});