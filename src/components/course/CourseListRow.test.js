import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseListRow from './CourseListRow';

function setup() {
    // define props
    let props = {
        // enter course data
        course: {
            id: 42001,
            title: 'React is Awesome',
            authorId: '109',
            category: 'React',
            length: '1:00'
        }
    };

    return shallow(<CourseListRow {...props} />);
}

describe('CourseList via Enzyme', () => {
    it('test the <td>', () => {

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup();

        // CourseListRow.js has one <tr>
        expect(wrapper.find('tr').length).toBe(1);
        

        expect(wrapper.find('tr').childAt(0).text()).toEqual('Watch');
        // Find the table data, and check the childAt 2 (3rd child)
        // course.authorId is what we set it to in setup(), 109.
        expect(wrapper.find('tr').childAt(2).text()).toEqual('109');
        expect(wrapper.find('tr').childAt(3).text()).toEqual('React');
        expect(wrapper.find('tr').childAt(4).text()).toEqual('1:00');

        // much harder, but figured using console.log(). 
        // we need to get the 2nd childAt to get the right <td>
        // then we need to find <Link />
        // Link has the {course.title} and the path /course/{course.id}
        expect(wrapper.find('tr').childAt(1).find('Link').props().to).toEqual('/course/42001');
        expect(wrapper.find('tr').childAt(1).find('Link').props().children).toEqual('React is Awesome');
    });
});