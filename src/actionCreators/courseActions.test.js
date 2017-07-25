import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('Course Actions', () => {
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