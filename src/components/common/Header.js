import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import '../../styles/styles.css';

const Header = () => {
    return (
        // this is our header that uses react-router to navigate to different pages
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="about" activeClassName="active">About</Link>
            {" | "}
            <Link to="courses" activeClassName="active">Courses</Link>
        </nav>
    );
};

export default Header;