import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actionCreators/courseActions';

// Presentational Component
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        // We need to pass down some mutable (changable) state to our Presentational Component
        // so setting up some local state allows us to amend course whenever we want
        // this is useful when we use our updateCourseState() as course will need to change when a user types
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };

        // because ES6, we need to handle 'this' keyword in JS.
        // remember, call() and apply() allow us to set the 'this' keyword.
        // bind() does exactly the same, but allows us to invoke it later. 
        // So using bind() in the ctor makes sense, as we dont want to call this now 
        // So we just set this to the instance of the class, rather than the render()'s this which is what invokes it
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    // in our Presentational Component - TextInput.js (an input box) we bind the props' onChange() to updateCourseState()
    // this is so we can keep the state at the top level and can use it whenever needed.
    // Each time this gets called, we delete the current state and create a new one via Object.assign()
    // we then set it's value
    // and then set the state via setState()
    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    // Note: saveCourse() binds to CourseForm.js button's onSave() = onClick() 
    // in courseAction.js, we have saveCourse, which will use the api to either update or create a course
    // we have all the actions on our props already defined by our mapDispatchToProps() below
    // the api needs to take in a course. 
    // The course created by the user is already set by the updateCourseState() which is stored in this.state.course
    saveCourse() {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);

        // this uses the contextTypes's router to redirect our url to the courses page after we save
        this.context.router.push('/courses');
    }

    // pass props down to Presentational Component
    render() {
        return (
            <CourseForm 
                course={this.state.course}
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors} 
            />
        );
    }
}

// propTypes is a static property, so must be defined below our class in a static call.
// explicit about our props
ManageCoursePage.propTypes = {
    course: React.PropTypes.object.isRequired,
    authors: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

// contextTypes is a static property, so must be defined below our class in a static call.
// We want router to be one of the contextTypes, which makes React Router's context available to us throughout this component via this.context.router. 
// Context, is a global variable that library authors use but that we as library consumers should avoid. 
// Yes, global state is generally evil, but context is used by both React Router and Redux in some places to provide easy access to the data 
// that we need without having to write boilerplate plumbing code. 
// And that's exactly what we're avoiding here. 
// Since we have access to the router's context, we use it in our save function.
ManageCoursePage.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
    // pass an empty course to CourseForm.js to display a blank course so the user can add a new one
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    // api gives us unformatted data, so we make it useful by adding a mapping function here.
    // this will be the list used for our dropdown, hence an array of authors 
    const authorFormattedForDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    //state to pass to PresentationalComponent
    return {
        course: course,
        authors: authorFormattedForDropDown
    };
}

// bindActionCreators handles three actions - loadAuthors, loadCourses, saveCourse
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(ManageCoursePage);