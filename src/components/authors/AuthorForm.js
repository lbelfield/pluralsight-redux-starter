import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import ReadOnlyTextInput from '../common/ReadOnlyTextInput';

const AuthorForm = ({author, onChange, onSave}) => {
    return (
        <form>
            <h1>Manage Author</h1>
            <TextInput
                name="firstName"
                label="First Name"
                placeholder="Please enter a first name"
                value={author.firstName}
                onChange={onChange}
            />
            <TextInput
                name="lastName"
                label="Last Name"
                placeholder="Please enter a last name"
                value={author.lastName}
                onChange={onChange}
            />
            <ReadOnlyTextInput
                name="id"
                label="id"
                value={author.id}
            />
            <input 
                name="submit"
                value="Save"
                className="btn btn-primary"
                onClick={onSave}
            />
        </form>     
    );
};

AuthorForm.propTypes = {
    author: React.PropTypes.object,
    onChange: React.PropTypes.func, 
    onSave: React.PropTypes.func
};

export default AuthorForm;