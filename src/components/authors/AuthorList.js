import React, {PropTypes, Component} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors, onDelete}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author =>
                    <AuthorListRow 
                        key={author.id}
                        author={author}
                        onDelete={onDelete}
                    />
                )}
            </tbody>
        </table>
    );
};

AuthorList.propTypes = {
    authors: React.PropTypes.array.isRequired,
    onDelete: React.PropTypes.func.isRequired
};

export default AuthorList;