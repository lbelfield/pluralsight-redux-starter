import React, { PropTypes, Component } from 'react';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);

        // because ES6, we need to handle 'this' keyword in JS.
        // remember, call() and apply() allow us to set the 'this' keyword.
        // bind() does exactly the same, but allows us to invoke it later. 
        // So using bind() in the ctor makes sense, as we dont want to call this now 
        // So we just set this to the instance of the class, rather than the render()'s this which is what invokes it
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);

        this.state = {
            course: { title: "" }
        };
    }

    // create two new functions to handle our jsx.

    // our text box - when it changes, fire off this function.
    // this sets the value passed in (value=this.state.course.title) and uses setState to change the state.course
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value="save" onClick={this.onClickSave}/>
            </div>
        );
    }
}

export default CoursesPage;