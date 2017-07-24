import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import SelectInput from './SelectInput';

function setup(dropDownDefault, dropDownList, error) {
    // define props
    let props = {
        name: 'name1',
        label: 'Author',
        onChange: () => {},
        // default value in dropdown
        defaultOption: dropDownDefault,
        value: 'value1',
        error: error,
        // array of dropdown strings
        options: dropDownList
    };

    return shallow(<SelectInput {...props} />);
}

describe('SelectInput via Enzyme', () => {
    it('test the basic drop down with only default value in list', () => {

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup('Select Author', [], '');

        // assert on <label />
        expect(wrapper.find('label').props().children).toBe('Author');
        expect(wrapper.find('label').props().htmlFor).toBe('name1');

        // assert on <select />
        expect(wrapper.find('select').props().name).toBe('name1');
        expect(wrapper.find('select').props().value).toBe('value1');

        // assert on <option />
        // note as we're passing in no strings into the array of drop down 
        // can just use the default
        expect(wrapper.find('option').props().children).toBe('Select Author');
    });

    it('test the drop down list with values present', () => {

        let dropDownList = 
            [
                {'value': 'Cory House'},
                {'value': 'Scott Allen'},
                {'value': 'Dan Wahlin'}
            ];

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup('Select Author', dropDownList, '');

        // assert on <option />
        // check default drop down, which comes first
        expect(wrapper.find('select').childAt(0).props().children).toBe('Select Author');
        
        // check first element in drop down list array
        expect(wrapper.find('select').childAt(1).props().value).toBe('Cory House');
        
        // check second element in drop down list array
        expect(wrapper.find('select').childAt(2).props().value).toBe('Scott Allen');
        
        // check third element in drop down list array
        expect(wrapper.find('select').childAt(3).props().value).toBe('Dan Wahlin');
    });

    it('when error occurs, check classNames alert alert-danger', () => {

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup('Select Author', [], 'newError');

        // assert on <div className="alert alert-danger">
        expect(wrapper.find('div').last().props().className).toBe('alert alert-danger');    
    });
});