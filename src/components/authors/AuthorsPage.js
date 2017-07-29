import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import AuthorList from './AuthorList';
import * as authorActions from '../../actionCreators/authorActions';

class AuthorsPage extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);             
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    redirectToAddAuthorPage() {
        browserHistory.push("/author");
    }

    onUpdate(event) {
        browserHistory.push("/author/" + event.target.name);
    }

    onDelete(event) {
        this.props.actions.deleteAuthor(event.target.name);           
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>

                <input 
                    style={{"marginBottom": "14px"}}
                    type="submit"
                    value="Add Author"
                    className="btn btn-primary"
                    onClick={this.redirectToAddAuthorPage}
                />

                <AuthorList 
                    authors={this.props.authors}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                />
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    authors: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
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