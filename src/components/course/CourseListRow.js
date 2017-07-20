import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
    debugger;
    // We have a table with headers and a body in the parent, CourseList. 
    // This contains the rows and data for the table, ie the <tr> <td> 
    // from our Container Component, we passed down course (line 4) into props from a .map() 
    // (which is like a foreach, with foreach course in courses)
    // this object, course is explicitly defined in our propTypes. 

    // Now we have the course, we can display each thing we want within it
    // We create an anchor href to Pluralsight
    // we create a Link using our react-router, which takes us to the page
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;
