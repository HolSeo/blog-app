const defaultblogsReducerState = []

const blogsReducer = (state = defaultblogsReducerState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return {
                type: 'ADD'
            }
        default:
            return state
    }
}

export default blogsReducer