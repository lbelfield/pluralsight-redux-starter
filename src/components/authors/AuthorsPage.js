import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AuthorList from './AuthorList';
import * as authorActions from '../../actionCreators/authorActions';

class AuthorsPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>

                <input 
                    style={{"margin-bottom": "14px"}}
                    type="submit"
                    value="Add Author"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} // todo
                    />

                <AuthorList 
                    authors={this.props.authors}
                />
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    authors: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(AuthorsPage);