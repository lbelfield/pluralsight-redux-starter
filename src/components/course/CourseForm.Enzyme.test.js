import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(blnSavingValue) {
    // define props
    let props = {
        course: {}, 
        saving: blnSavingValue, 
        errors: {}, 
        onSave: () => {},
        onChange: () => {}
    };

    // we return the component we want to test via the shallow()
    // as this is testing CourseForm.js, we render that component.
    // pass in props as the parameters via the spread operator
    return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
    it('renders form and h1', () => {

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup(false);

        // line 13 of CourseForm.js says the top-level element is a <form>
        // We are only expecting to find 1 of them
        // note expect(x).toBe(y) = assert(x,y)
        expect(wrapper.find('form').length).toBe(1);
        
        // line 14 states its child <h1> has text inside being 'Manage Course'
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" when not saving', () => {
        // want 'Save' on button, so pass blnSavingValue=false
        const wrapper = setup(false);

        // find the input element. We expect it's value to be 'Save'
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when not saving', () => {
        // want 'Saving...' on button, so pass blnSavingValue=true
        const wrapper = setup(true);

        //console.log(wrapper.find('input'));
        // find the input element. We expect it's value to be 'Saving...'
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });

});