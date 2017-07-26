// NOTE THIS ONLY TESTS A BASIC ACTION 
// VERY LITTLE POINT IN THIS!!!

import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('Course Actions - Actions Only', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {

            // Assign
            const course = {id: 'clean-code', title: 'Clean Code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS, 
                course: course
            };

            // Act
            const action = courseActions.createCourseSuccess(course);

            // Assert
            expect(action).toEqual(expectedAction); 
        });
    });
});