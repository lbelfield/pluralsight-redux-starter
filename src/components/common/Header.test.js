import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Header from './Header';

function setup(blnLoadingValue) {
    // define props
    let props = {
        loading: blnLoadingValue
    };

    return shallow(<Header {...props} />);
}

describe('CourseList via Enzyme', () => {
    it('test the nav text values', () => {

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup(true);

        // Header.js has one <nav>
        expect(wrapper.find('nav').length).toBe(1);
        
        // <IndexLink /> has text: Home and link to: /
        expect(wrapper.find('IndexLink').props().children).toEqual('Home');
        expect(wrapper.find('IndexLink').props().to).toEqual('/');

        // children in position 2nd and 4th are just seperators or pipes.
        //expect(wrapper.find('nav').childAt(1).text()).toEqual(' | ');
        
        // <Link /> has text: About and link to: about
        expect(wrapper.find('nav').childAt(2).props().to).toEqual('about');
        expect(wrapper.find('nav').childAt(2).props().children).toEqual('About');

        // <Link /> has text: Courses and link to: course
        expect(wrapper.find('nav').childAt(3).props().to).toEqual('courses');
        expect(wrapper.find('nav').childAt(3).props().children).toEqual('Courses');
    });

    it('test the loading dots, when loading set to true, returns dots', () => {

        // create a variable and set equal to setup so we can assert against it.
        const wrapper = setup(true);

        // when loading is set to true, we have <LoadingDots inteval={100} dots={20} />
        //inside the 4th element of the nav
        expect(wrapper.find('nav').childAt(4).find('LoadingDots').props().inteval).toEqual(100);
        expect(wrapper.find('nav').childAt(4).find('LoadingDots').props().dots).toEqual(20);
    });
});