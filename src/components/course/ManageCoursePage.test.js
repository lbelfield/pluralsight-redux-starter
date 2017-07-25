import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe ('Manage Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        // define props
        const props = {
            authors: [],
            course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
            actions: { saveCourse: () => { return Promise.resolve(); } }
        };
        // pass in props using spread operator
        const wrapper = mount(<ManageCoursePage {...props} />);

        // Remember, this is searching through our ManageCoursePage component and all of its children
        // so we can use a .last() to ensure it is indeed the last one.
        const saveButton = wrapper.find('input').last();

        // confirm the type to be a submit button, as no other inputs on this page match this filter
        expect(saveButton.prop('name')).toBe('submit');

        // simulating events allows us to test events, in this case, a click event
        saveButton.simulate('click');

        //assert
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});