import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthorForm from './AuthorForm';
import * as AuthorActions from '../../actionCreators/authorActions';

class ManageAuthorPage extends Component {
    constructor(state, context) {
        super(state, context);

        this.state = {
            author: Object.assign({}, this.props.author)
        };

        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('Hit-man');
    //     if(this.props.author.id !== nextProps.author.id) {
    //         console.log('Hit');
    //         this.setState({author: Object.assign({}, nextProps.author)});
    //     }
    // }

    onChange(event) {
        let field = event.target.name;
        let newAuthor = Object.assign({}, this.state.author);
        newAuthor[field] = event.target.value;
        return this.setState({author: newAuthor});
    }

    onSave() {
        console.log("save Button Clicked");
    }

    render() {
        return (
            <AuthorForm 
                author={this.state.author}
                onChange={this.onChange}
                onSave={this.onSave}
            />
        );
    }
}

ManageAuthorPage.propTypes = {
    author: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

    let authorFormData = {};

    if(ownProps.routeParams.id) {      
        authorFormData = state.authors.filter(a => a.id == ownProps.routeParams.id)[0];
    }
    else {
        authorFormData = {id: '', firstName: '', lastName: ''};
    }

    return {
        author: authorFormData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AuthorActions, dispatch)
    };
}
 
const connectStateAndActions = connect(mapStateToProps, mapDispatchToProps);
export default connectStateAndActions(ManageAuthorPage);