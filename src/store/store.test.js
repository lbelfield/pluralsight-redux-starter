// This is a full integration test, testing the Actions, Reducers and the Store.

import expect from 'expect';
import { createStore } from 'redux'; // we'll pass our store to our rootReducer
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actionCreators/courseActions';
import * as authorActions from '../actionCreators/authorActions';

describe('Store', () => {
    
    it('Should handle creating courses', () => {
        
        // Arrange
        // Create a store, similar to our configureStore.js in our application's entry point
        // note: initialState = { authors: [], courses: [], ajaxCallsInProgress: 0 }
        const store = createStore(
            rootReducer, 
            initialState
        );

        const course = {
            title: "Clean Code"
        };

        // Act
        // We create a reference to our Action Creator, and put a course inside...
        const action = courseActions.createCourseSuccess(course);
        // so we can call the dispatch function on our store and pass the Action (which holds our course)
        store.dispatch(action);

        // Assert
        // We get the state from our store, which holds all of our courses.
        // The store initially had initialState (which is an array of empty stores),
        // we add one course by calling createCourseSuccess(), 
        // now actual holds that single course
        const actual = store.getState().courses[0];

        const expected = {
            title: "Clean Code"
        };

        expect(actual).toEqual(expected);
    });

    it('Should handle updating courses', () => {
        
        // Arrange

        // initial course
        const course = {
            id: '1',
            title: "Clean Code"
        };

        initialState.courses = [];
        initialState.courses.push(course);
        // note: initialState = { authors: [], courses: [ { id: '1', title: 'Clean Code' } ], ajaxCallsInProgress: 0 }
        
        // Create a store, similar to our configureStore.js in our application's entry point
        const store = createStore(
            rootReducer, 
            initialState
        );

        // updated course
        const updatedCourse = {
            id: '1',
            title: "Cleaner Code"
        };        

        // Act
        // We create a reference to our Action Creator, and put a course inside...
        const action = courseActions.updateCourseSuccess(updatedCourse);
        // so we can call the dispatch function on our store and pass the Action (which holds our updated course)
        store.dispatch(action);

        // Assert
        // We get the state from our store, which holds all of our courses.
        // The store initially had initialState (with old state),
        // we add one course by calling updateCourseSuccess(), 
        // now actual holds that updated course in the new state
        const actual = store.getState().courses[0];

        const expected = {
            id: '1',
            title: "Cleaner Code"
        };

        expect(actual).toEqual(expected);
    });

    it('Should handle loading courses', () => {
        
        // Arrange

        // initial course
        const courses = [
            { id: '1', title: "Clean Code" },
            { id: '2', title: "React Fundamentals" }
        ];

        initialState.courses = [];
        initialState.courses.push(courses);
        
        // Create a store, similar to our configureStore.js in our application's entry point
        const store = createStore(
            rootReducer, 
            initialState
        );  

        // Act
        // We create a reference to our Action Creator, and put the courses inside...
        const action = courseActions.loadCoursesSuccess(courses);
        // so we can call the dispatch function on our store and pass the Action (which holds our courses)
        store.dispatch(action);

        // Assert
        // We get the state from our Action that has just called the loadCourses()     
        const firstCourseInArrayFromState = action.courses[0];
        const expected = { id: '1', title: "Clean Code" };
        expect(firstCourseInArrayFromState).toEqual(expected);
    });

    it('Should handle loading authors', () => {
        
        // Arrange

        // initial authors
        const authors = [
            {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
            {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'},
            {id: 'dan-wahlin', firstName: 'Dan', lastName: 'Wahlin'}
        ];

        initialState.courses = [];
        initialState.authors.push(authors);
        
        // Create a store, similar to our configureStore.js in our application's entry point
        const store = createStore(
            rootReducer, 
            initialState
        );  

        // Act
        // We create a reference to our Action Creator, and put the authors inside...
        const action = authorActions.loadAuthorsSuccess(authors);
        // so we can call the dispatch function on our store and pass the Action (which holds our authors)
        store.dispatch(action);

        // Assert
        // We get the state from our Action that has just called the loadAuthors() 
        const firstAuthorInArrayFromState = action.authors[0];
        const expected = { id: 'cory-house', firstName: 'Cory', lastName: 'House' };
        expect(firstAuthorInArrayFromState).toEqual(expected);
    });

    it('Should handle deleting courses', () => {
        // Arrange
        const courses = [
            { id: '1', title: "Clean Code" },
            { id: '2', title: "React Fundamentals" },
            { id: '3', title: "Angular Fundamentals" }
        ];

        initialState.courses = [];
        initialState.courses = courses;
        
        const store = createStore(
            rootReducer, 
            initialState
        );  

        // Act
        const action = courseActions.deleteCourseSuccess('2');
        store.dispatch(action);

        // Assert
        const actual = store.getState().courses;

        const firstCourseInArrayFromState = actual[0];
        const expectedFirst = { id: '1', title: "Clean Code" };
        expect(firstCourseInArrayFromState).toEqual(expectedFirst);

        const secondCourseInArrayFromState = actual[1];
        const expectedSecond = { id: '3', title: "Angular Fundamentals" };
        expect(secondCourseInArrayFromState).toEqual(expectedSecond);

        expect(actual.length).toEqual(2);
    });
});