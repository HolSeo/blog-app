
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
        case 'READ_BLOG':
            return [...state,action.blog]
        case 'REMOVE_BLOG':
            return state.filter((blog) => blog.id !== action.id)
        default:
            return state
    }
}

export default blogsReducer