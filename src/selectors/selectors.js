// Note, in the ManageCoursePage.js we had a big mapStateToProps, which makes it a little hard to test. 
// So we refactored by putting this in a selectors.js file.
// This also gives us good separation. 

// Bonus: if we use a Memoize library like Reselect to improve performance, they advise to have the selectors in a selector.js file. 
// This function would only rerun when it gets new parameters. That's really useful for expensive operations.

export function authorFormattedForDropDown(authors) {
    // api gives us unformatted data, so we make it useful by adding a mapping function here.
    // this will be the list used for our dropdown, hence an array of authors 
    return authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
} 