const defaultblogsReducerState = []

const blogsReducer = (state = defaultblogsReducerState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [...state, action.blog]
        case 'SET_BLOGS':
            return action.blogs
        default:
            return state
    }
}

export default blogsReducer