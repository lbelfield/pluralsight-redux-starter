import expect from 'expect';
import {authorFormattedForDropDown} from './selectors';

describe('Author Selectors', () => {
    describe('authorFormattedForDropDown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            //Assign
            const authors = [
                {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
            ];

            // Act
            let format = authorFormattedForDropDown(authors);

            // create what we expect
            const expectedValue = [
                {value: 'cory-house', text: 'Cory House'},
                {value: 'scott-allen', text: 'Scott Allen'}
            ];

            //Assert
            expect(format).toEqual(expectedValue);
        });
    });
});