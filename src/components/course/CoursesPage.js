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