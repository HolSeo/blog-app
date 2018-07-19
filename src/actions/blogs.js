import database from '../firebase/firebase'
import { firebase } from '../firebase/firebase'

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
            createdAt = 0,
            name = ''
        } = blogData
        const blog = { title, body, createdAt, name }
        return database.ref(`users/${uid}/blogs`).push(blog).then((ref) => {
            dispatch(addBlog({
                id: ref.key,
                ...blog
            }))
        })
    }
}

export const editBlog = (id,updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
})

export const startEditBlog = (id, updates) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/blogs/${id}`).update(updates).then(() => {
            dispatch(editBlog(id,updates))
        })
    }
}

export const setBlogs = (blogs) => ({
    type: 'SET_BLOGS',
    blogs
})

export const startSetBlogs = () => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/blogs`).once('value').then((snapshot) => {
            const blogs = []
            snapshot.forEach((childSnapshot) => {
                blogs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setBlogs(blogs))
        })
    }
}

export const removeBlog = (id)  => ({
    type: 'REMOVE_BLOG',
    id
})

export const startRemoveBlog = (id) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/blogs/${id}`).remove().then(() => {
            dispatch(removeBlog(id))
        })
    }
}

export const readBlog = (blog) => ({
    type: 'READ_BLOG',
    blog
})

let shownBlog

export const startReadBlog = (id) => {
    return (dispatch) => {
        let blogList = []
        database.ref(`users`).once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                childSnapshot.forEach((blog) => {
                    blogList.push(blog.val())
                })
            })
            blogList.forEach((blog) => {
                if (Object.keys(blog).findIndex((key) => key === id) !== -1) {
                    Object.keys(blog).forEach((key) => {
                        if (key === id) {
                            shownBlog = {
                                id,
                                title: blog[key].title,
                                name: blog[key].name,
                                createdAt: blog[key].createdAt,
                                body: blog[key].body
                            }
                        }
                    });
                }
            })
            dispatch(readBlog(shownBlog))
        })
    }
}


