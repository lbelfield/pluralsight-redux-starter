import React from 'react';

// two custom Presentational Components
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// we pass all the props we need to our two Presentational Components.
// including the values in course, the list of authors in options, onChange() defined in Container Component

// explicit about props here and in propTypes
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title} />

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId} />

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category} />

            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length} />

            <input
                name="submit"
                disabled={loading}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;
