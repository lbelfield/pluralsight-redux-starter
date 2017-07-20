import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actionCreators/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        debugger;
        // note propTypes explicitly defines courses, which is an array.
        // this is set on load by mapStateToProps, which passes an array of courses (got from CourseReducer and CourseActions)
        // As this is a Container Component, we need to eliminate any Presentational code, so we create CourseList.
        // CourseList needs access to this course array, so we pass it down to it's props.
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
                <h2>Luke's kick ass app</h2>
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

// this is our Function used in our react-redux's Connect Function
// to determine what state we want to expose to our CoursePage.js Component
function mapStateToProps(state, ownProps) {
    debugger;
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
    debugger;
    return {
        // this is our Option 3. 
        // use bindActionCreator method on 'redux' to wrap our Action Creator (actionCreators/courseActions.js's createCourse() ) in a Dispatch call
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// Connect Function from react-redux to add state and actions to our CoursesPage component.
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);