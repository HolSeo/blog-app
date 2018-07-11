import database from '../firebase/firebase'

export const addBlog= (blog) => ({
    type: 'ADD_BLOG',
    blog
})

export const startAddBlog = (blogData = {}) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        const {
            title =  '',
            body = '',
            createdAt = 0
        } = blogData
        const blog = { title, body, createdAt }
        return database.ref(`users/${uid}/blogs`).push(blog).then((ref) => {
            dispatch(addBlog({
                id: ref.key,
                ...blog
            }))
        })
    }
}

export const editBlogPage = (id,updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
})

export const startEditPage = (id, updates) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/blogs/${id}`).update(updates).then(() => {
            dispatch(editBlogPage(id,updates))
        })
    }
}