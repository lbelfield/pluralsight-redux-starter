import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseList from './CourseList';

function setup() {
    // define props
    let props = {
        courses: [],
        onDelete: () => {}
    };

    return shallow(<CourseList {...props} />);
}

describe('CourseList via Enzyme', () => {
    it('renders table, test the <tr>', () => {

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup();

        // CourseList.js has one <table>
        expect(wrapper.find('table').length).toBe(1);
        
        expect(wrapper.find('tr').childAt(0).text()).toEqual(' ');
        // Find the table row, and check the childAt 1 (2nd child) = 'Title'
        expect(wrapper.find('tr').childAt(1).text()).toEqual('Title');
        expect(wrapper.find('tr').childAt(2).text()).toEqual('Author');
        expect(wrapper.find('tr').childAt(3).text()).toEqual('Category');
        expect(wrapper.find('tr').childAt(4).text()).toEqual('Length');
        expect(wrapper.find('tr').childAt(5).text()).toEqual('Delete');
    });

});