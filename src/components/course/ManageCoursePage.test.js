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
            actions: { 
                saveCourse: () => { return Promise.resolve(); }
            }
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

    // it('Update Course State', () => {
    //     const props = {
    //         authors: [],
    //         course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
    //         actions: { 
    //             saveCourse: () => { return Promise.resolve(); }
    //         },
    //         onChange: () => {}
    //     };

    //     const wrapper = mount(<ManageCoursePage {...props} />);

    //     const titleTextInput = wrapper.find('TextInput').first();
    //     expect(titleTextInput.prop('label')).toBe('Title');
    //     console.log(titleTextInput.props());
    //     const titleEvent = {target: {value: 'THIS SHIT UPDATED MOTHERFUCKER'}};
    //     titleTextInput.simulate('change', titleEvent);
    //     console.log(titleTextInput);        
    //     console.log(wrapper.state());
    // });


    // it('Update Course State', () => {
    //     const props = {
    //         authors: [],
    //         course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
    //         actions: { 
    //             saveCourse: () => { return Promise.resolve(); }
    //         },
    //         onChange: () => {}
    //     };

    //     const wrapper = mount(<ManageCoursePage {...props} />);

    //     const titleTextInput = wrapper.find('TextInput').first();
    //     expect(titleTextInput.prop('name')).toBe('title');
    //     // //console.log(titleTextInput.props());
    //     const titleEvent = {target: {value: 'THIS SHIT UPDATED MOTHERFUCKER'}};
    //     titleTextInput.simulate('change', titleEvent);
    //     // //console.log(titleTextInput.props());        
    //     // //console.log(wrapper.state());

    //     const selectInput = wrapper.find('SelectInput');
    //     expect(selectInput.prop('name')).toBe('authorId');
    //     // //console.log(selectInput.props());
    //     selectInput.simulate('change');

    //     const categoryTextInput = wrapper.find('TextInput').at(1);
    //     expect(categoryTextInput.prop('name')).toBe('category');
    //     // //console.log(categoryTextInput.props());
    //     categoryTextInput.simulate('change');

    //     const lengthTextInput = wrapper.find('TextInput').last();
    //     expect(lengthTextInput.prop('name')).toBe('length');
    //     lengthTextInput.simulate('change', {target: {name: '2:00'}});
    //     // //console.log(lengthTextInput.props());
    //     // //console.log(wrapper.state());
    // });

    // todo should unit test:
        // 1 updateCourseState()
        // 2 redirectToCoursesPage()
        // 3 Rest of mapStateToProps - note partially done in the selectors/selector.js
});