const defaultblogsReducerState = []

const blogsReducer = (state = defaultblogsReducerState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [...state, action.blog]
        case 'SET_BLOGS':
            return action.blogs
        case 'EDIT_BLOG':
            return state.map((blog) => {
                if (blog.id === action.id) {
                    return {
                        ...blog,
                        ...action.updates
                    }
                } else {
                    return blog
                }
            })
        default:
            return state
    }
}

export default blogsReducer