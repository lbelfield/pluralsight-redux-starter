// this whole export function is my Action Creator for createCourse()
export function createCourse(course) {
    // it returns an Action
    // remember, Actions must have a type.
    // for this Action, I'm just passing course data
    return { type: 'CREATE_COURSE', course: course };
}