import React, {PropTypes} from 'react';

const ReadOnlyTextInput = ({name, label, value}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input 
                    type="text"
                    name={name}
                    className="form-control"
                    value={value}
                    readOnly
                />
            </div>
        </div>
    );
};

ReadOnlyTextInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string
};

export default ReadOnlyTextInput;