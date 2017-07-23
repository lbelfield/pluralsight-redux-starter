import expect from 'expect';
import React from 'react';
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

    // create instance of the React Test Utils Renderer
    let renderer = TestUtils.createRenderer();

    // we render the component we want to test.
    // as this is testing CourseForm.js, we render that component.
    // pass in props as the parameters via the spread operator
    renderer.render(<CourseForm {...props} />);

    // Get the output of this renderer.
    let output = renderer.getRenderOutput();

    // return an object to potentially assert against
    return {
        props,
        output,
        renderer
    };
}

describe('CourseForm via React Test Utils', () => {
    it('renders form and h1', () => {

        // create a variable and set equal to setup so we can assert against it.
        const {output} = setup(false);

        // line 13 of CourseForm.js says the top-level element is a <form>
        // note expect(x).toBe(y) = assert(x,y)
        expect(output.type).toBe('form');
        
        // we have access to output's children via props.children
        // line 14 states its first child is a <h1>. 
        // So the first element in the array should be a <h1>
        let [ h1 ] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled "Save" when not saving', () => {
        // want save on button, so pass false
        const { output } = setup(false);

        // want the input element, so need the fifth item in the array.
        // In CourseForm.js, it is the fifth child...
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labeled "Saving..." when not saving', () => {
        // want saving... on button, so pass true
        const { output } = setup(true);

        // want the input element, so need the fifth item in the array.
        // In CourseForm.js, it is the fifth child...
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });

});