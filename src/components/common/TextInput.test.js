import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import TextInput from './TextInput';

function setup(error) {
    // define props
    let props = {
        name: 'name1',
        label: 'Author',
        onChange: () => {},
        placeholder: 'placeholder1',
        value: 'value1',
        error: error
    };

    return shallow(<TextInput {...props} />);
}

describe('SelectInput via Enzyme', () => {
    it('test the basic structure of the TextInput', () => {

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup('');

        // assert on <label />
        expect(wrapper.find('label').props().children).toBe('Author');
        expect(wrapper.find('label').props().htmlFor).toBe('name1');

        // assert on <input />
        expect(wrapper.find('input').props().type).toBe('text');
        expect(wrapper.find('input').props().name).toBe('name1');
        expect(wrapper.find('input').props().className).toBe('form-control');
        expect(wrapper.find('input').props().placeholder).toBe('placeholder1');
        expect(wrapper.find('input').props().value).toBe('value1');         
    });

    it('when error occurs, check classNames: wrapperClass and alert', () => {

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup('newError');

        // assert on <div className={wrapperClass} />
        expect(wrapper.find('div').first().props().className).toBe('form-group has error');
        
        // assert on <div className="alert alert-danger">
        expect(wrapper.find('div').last().props().className).toBe('alert alert-danger');    
    });

    // it('test the drop down list with values present', () => {

    //     let dropDownList = 
    //         [
    //             {'value': 'Cory House'},
    //             {'value': 'Scott Allen'},
    //             {'value': 'Dan Wahlin'}
    //         ];

    //     // create a variable and set equal to setup so we can assert against it.
    //     const wrapper = setup();

    //     // assert on <option />
    //     // check default drop down, which comes first
    //     expect(wrapper.find('select').childAt(0).props().children).toBe('Select Author');
        
    //     // check first element in drop down list array
    //     expect(wrapper.find('select').childAt(1).props().value).toBe('Cory House');
        
    //     // check second element in drop down list array
    //     expect(wrapper.find('select').childAt(2).props().value).toBe('Scott Allen');
        
    //     // check third element in drop down list array
    //     expect(wrapper.find('select').childAt(3).props().value).toBe('Dan Wahlin');
    // });
});