import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import '../../styles/styles.css';
import LoadingDots from './LoadingDots';

// explicit about props here and in propTypes
const Header = ({loading}) => {
    return (
        // this is our header that uses react-router to navigate to different pages
        // note loading dots are displayed if the ajax calls are in progress.
        // use of ternary operator
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="about" activeClassName="active">About</Link>
            {" | "}
            <Link to="authors" activeClassName="active">Authors</Link>
            {" | "}
            <Link to="courses" activeClassName="active">Courses</Link>
            {(loading ? <LoadingDots inteval={100} dots={20} /> : null )}         
        </nav>
    );
};

// propTypes is a static property, so must be defined below our class in a static call.
// explicit about our props
Header.propTypes = {
    loading: React.PropTypes.bool.isRequired
};

export default Header;