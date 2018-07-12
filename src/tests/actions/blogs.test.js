import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import blogs from '../fixtures/blogs'
import { startAddBlog, addBlog, editBlog, startEditBlog, setBlogs, startSetBlogs, removeBlog, startRemoveBlog } from '../../actions/blogs'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])
const uid = 'thisistestinguid'
const defaultAuthState = { auth: { uid } }

beforeEach((done) => {
    const blogData = {}
    blogs.forEach(({ id, title, body, createdAt}) => {
        blogData[id] = { title, body, createdAt }
    })
    database.ref(`users/${uid}/blogs`).set(blogData).then(() => done())
})

test('should generate correct addBlog object', () => {
    expect(addBlog(blogs[0])).toEqual({
        type: 'ADD_BLOG',
        blog: blogs[0]
    })
})
test('should add blog to the store and database', (done) => {
    const store = createMockStore(defaultAuthState)
    const blogData = {
        title: 'testing',
        body: 'testing body',
        createdAt: 10000
    }
    store.dispatch(startAddBlog(blogData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_BLOG',
            blog: {
                id: expect.any(String),
                ...blogData
            }
        })
        return database.ref(`users/${uid}/blogs/${actions[0].blog.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(blogData)
        done()
    })
})

test('should generate edit blog object', () => {
    const updates = {
        body: 'this is an update'
    }
    expect(editBlog(blogs[1].id, updates)).toEqual({
        type: 'EDIT_BLOG',
        id: blogs[1].id,
        updates
    })
})

test('should edit blog from database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const updates = {
        body: 'this is an update'
    }
    store.dispatch(startEditBlog(blogs[1].id, updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_BLOG',
            id: blogs[1].id,
            updates
        })
        return database.ref(`users/${uid}/blogs/${blogs[1].id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val().body).toEqual(updates.body)
        done()
    })
})

test('should correctly generate setBlogs object', () => {
    expect(setBlogs(blogs)).toEqual({
        type: 'SET_BLOGS',
        blogs
    })
})

test('should set blogs in store', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetBlogs()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_BLOGS',
            blogs
        })
        done()
    })
})

test('should generate the correct removeBlog object', () => {
    expect(removeBlog(blogs[1].id)).toEqual({
        type: 'REMOVE_BLOG',
        id: blogs[1].id
    })
})

test('should remove the correct blog in the database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = blogs[1].id
    store.dispatch(startRemoveBlog(id)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_BLOG',
            id
        })

        return database.ref(`users/${uid}/blogs/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBe(null)
        done()
    })
})

