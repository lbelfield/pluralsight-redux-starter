import expect from 'expect';
import authorReducer from './authorReducer';
import * as actions from '../actionCreators/authorActions';

describe('Author Reducer', () => {
    it('should load authors when passed LOAD_AUTHORS_SUCCESS', () => {
        
    // Arrange
        // create a three authors for the initial state
        const initialState = [
            {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
            {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'},
            {id: 'dan-wahlin', firstName: 'Dan', lastName: 'Wahlin'}
        ];

        // create an action
        const action = actions.loadAuthorsSuccess(initialState);

    // Act
        const state = authorReducer(initialState, action);

    //Assert
        // assert that three items returned from the authorReducer
        expect(state.length).toEqual(3);

        // check the ids of the authors are what we expect:
        expect(state[0].id).toEqual('cory-house');
        expect(state[1].id).toEqual('scott-allen');
        expect(state[2].id).toEqual('dan-wahlin');
    });
});