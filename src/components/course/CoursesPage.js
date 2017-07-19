import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actionCreators/courseActions';

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
        // here we use the Connect Function's mapDispatchToProps and use the action createCourse()
        this.props.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value="save" onClick={this.onClickSave}/>
            </div>
        );
    }
}

// to get rid of linting errors, we use propTypes to define our two new additions to the props - 
// ConnectFunction's mapStateToProps and mapDispatchToProps
CoursesPage.propTypes = {
    createCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

// this is our Function used in our react-redux's Connect Function
// to determine what state we want to expose to our CoursePage.js Component
function mapStateToProps(state, ownProps) {
    return {
        // in reducers/index.js, we combined all of our reducers into the rootReducer
        // here, courses represents the CourseReducer set in the rootReducer
        // we set courses = state.courses so we have the latest courses.
        courses: state.courses
    };
}

// this is our Function used in our react-redux's Connect Function
// to determine what actions we want to expose to our CoursePage.js Component
function mapDispatchToProps(dispatch) {
    return {
        // this is our Option 2. 
        // we manually wrap our Action Creator (actionCreators/courseActions.js's createCourse() ) in a Dispatch call
        createCourse: (course) => {
            dispatch(courseActions.createCourse(course));
        }
    };
}

// Connect Function from react-redux to add state and actions to our CoursesPage component.
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);