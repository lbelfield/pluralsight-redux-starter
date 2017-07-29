import React, { PropTypes, Component } from 'react';

const AuthorListRow = ({author, onDelete, onUpdate}) => {
    return (
        <tr>
            <td>{author.id}</td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
            <td>
                <input
                    type="submit"
                    name={author.id}
                    value="Update"
                    className="btn btn-primary"
                    onClick={onUpdate}
                />
            </td>
            <td>
                <input 
                    type="submit"
                    name={author.id}
                    value="Delete"
                    className="btn btn-primary"
                    onClick={onDelete}
                />
            </td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onUpdate: React.PropTypes.func.isRequired
};

export default AuthorListRow;