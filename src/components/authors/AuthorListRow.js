import React, { PropTypes, Component } from 'react';

const AuthorListRow = ({author}) => {
    return (
        <tr>
            <td>{author.id}</td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
            <td>
                <input
                    type="submit"
                    value="Update"
                    className="btn btn-primary"
                    //onClick={this.redirectToAddCoursePage} // todo
                />
            </td>
            <td>
                <input 
                    type="submit"
                    value="Delete"
                    className="btn btn-primary"
                    //onClick={this.redirectToAddCoursePage} // todo
                />
            </td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: React.PropTypes.object.isRequired
};

export default AuthorListRow;