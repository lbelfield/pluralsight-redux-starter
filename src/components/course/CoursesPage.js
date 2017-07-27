import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actionCreators/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

export class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
        
        // because ES6, we need to handle 'this' keyword in JS.
        // remember, call() and apply() allow us to set the 'this' keyword.
        // bind() does exactly the same, but allows us to invoke it later. 
        // So using bind() in the ctor makes sense, as we dont want to call this now 
        // So we just set this to the instance of the class, rather than the render()'s this which is what invokes it
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        // note propTypes explicitly defines courses, which is an array.
        // this is set on load by mapStateToProps, which passes an array of courses (got from CourseReducer and CourseActions)
        // As this is a Container Component, we need to eliminate any Presentational code, so we create CourseList.
        // CourseList needs access to this course array, so we pass it down to it's props.

        // also added a button to redirect to the Add courses page using our react-router
        return (
            <div>
                <h1>Courses</h1>

                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />

                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

// propTypes for props Validation
// to get rid of linting errors, we use propTypes to define our two new additions to the props - 
// ConnectFunction's mapStateToProps and mapDispatchToProps
CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

// WHAT STATE SHOULD I EXPOSE AS PROPS???
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

// WHAT ACTIONS SHOULD I EXPOSE AS PROPS???
// this is our Function used in our react-redux's Connect Function
// to determine what actions we want to expose to our CoursePage.js Component
function mapDispatchToProps(dispatch) {
    return {
        // this is our Option 3. 
        // use bindActionCreator method on 'redux' to wrap our Action Creator (actionCreators/courseActions.js's createCourse() ) in a Dispatch call
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// Connect Function from react-redux to add state and actions to our CoursesPage component.
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);