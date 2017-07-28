import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actionCreators/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        
    // Arrange
        // create a couple of courses for the initial state
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        // pass this newCourse into the Action Creator
        const newCourse = {title: 'C'};
        const action = actions.createCourseSuccess(newCourse);

    // Act
        const newState = courseReducer(initialState, action);

    //Assert
        // Test the two initialState + the action have been correctly added to the state
        expect(newState.length).toEqual(3);

        // check the titles of the courses are what we expect:
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        
    // Arrange
        // create a three courses for the initial state
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];

        // update course B and pass this into the Action Creator
        const updateCourseB =  {id: 'B', title: 'New Title'};
        const action = actions.updateCourseSuccess(updateCourseB);

    // Act
        // pass state and action into our courseReducer
        const newState = courseReducer(initialState, action);
        
        // use the course variable above to find the updatedCourse
        const updatedCourse = newState.find(b => b.id == updateCourseB.id);

        // use an course not updated
        const untouchedCourse = newState.find(a => a.id == 'A');

    //Assert
        // Test there's three courses in the state
        expect(newState.length).toEqual(3);

        // assert updated value been updated
        expect(updatedCourse.title).toEqual('New Title');

        // assert non-updated courses are unaffected
        expect(untouchedCourse.title).toEqual('A');
        
    });

    it('should load courses when passed LOAD_COURSE_SUCCESS', () => {
        
    // Arrange
        // create a three courses for the initial state
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];

        // create an action
        const action = actions.loadCoursesSuccess(initialState);

    // Act
        const state = courseReducer(initialState, action);

    //Assert
        // assert that three courses in the loadCourses
        expect(state.length).toEqual(3);

        // check the titles of the courses are what we expect:
        expect(state[0].title).toEqual('A');
        expect(state[1].title).toEqual('B');
        expect(state[2].title).toEqual('C');
    });

    it('should delete course when passed DELETE_COURSE_SUCCESS', () => {
        
    // Arrange
        // create three courses for the initial state
        const initialState = [
            {id: '1', title: 'A'},
            {id: '2', title: 'B'},
            {id: '3', title: 'C'}
        ];

        expect(initialState.length).toEqual(3);

        const action = actions.deleteCourseSuccess('1');

    // Act
        const newState = courseReducer(initialState, action);

    //Assert
        // Test the two initialState + the action have been correctly added to the state
        expect(newState.length).toEqual(2);

        // check the titles of the courses are what we expect:
        expect(newState[0].title).toEqual('B');
        expect(newState[1].title).toEqual('C');
    });

});