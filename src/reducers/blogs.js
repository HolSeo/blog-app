const defaultblogsReducerState = []

const blogsReducer = (state = defaultblogsReducerState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [...state, action.blog]
        default:
            return state
    }
}

export default blogsReducer