import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {CoursesPage} from './CoursesPage';
import * as router from 'react-router';

describe ('Courses Page', () => { 
    it('sets error message when trying to save empty title', () => {
        const props = {
            courses: [
                {id: '1', watchHref: '', title: 'React Tutorial', authorId: 'cory-house', length: '2:00', category: 'React'},
                {id: '2', watchHref: '', title: 'Angular Tutorial', authorId: 'cory-house', length: '5:00', category: 'Angular'}
                ],
            actions: { }
        }

        let routerHistoryString = "";

        // note the import router from react-router
        // browserHistory is a dependency and we need to check
        // it pushes the correct path onto our array.
        router.browserHistory = { 
            push: (value) => { 
                routerHistoryString = value 
            } 
        };

        const wrapper = mount(<CoursesPage {...props} />);

        const addCourseButton = wrapper.find('input');
        expect(addCourseButton.prop('type')).toBe('submit');

        addCourseButton.simulate('click');

        //assert that the browserHistory does have the /course value we expect
        expect(routerHistoryString).toBe('/course');
    })
 });
