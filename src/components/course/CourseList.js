import React, {PropTypes, Component} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, onDelete}) => {
    // we have a table with headers and a body. Note the CourseListRow will contain the <td>
    // from our Container Component, we passed down courses (line 4) into props. 
    // this array is explicitly defined in our propTypes. 
    // .map() accepts a function(course){} and is basically a foreach loop.
    // courses is your array, course is your object in the array.
    // foreach course in courses, it returns the <CourseListRow /> element
    // with course.id is the index of the foreach loop (course.id has to be unique, hence it is the key)
    // we then pass a course object down to the CourseListRow Component.
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => 
                    <CourseListRow 
                        key={course.id} 
                        course={course} 
                        onDelete={onDelete}
                    />
                )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default CourseList;