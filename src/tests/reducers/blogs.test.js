import blogs from '../fixtures/blogs'
import blogsReducer from '../../reducers/blogs';

test('should set default state', () => {
    const action = {
        type: '@@INIT'
    }
    expect(blogsReducer(undefined,action)).toEqual([])
})

test('should return correct state for ADD_BLOG', () => {
    const action = {
        type: 'ADD_BLOG',
        blog: blogs[0]
    }
    expect(blogsReducer(undefined,action)).toEqual([action.blog])
})

test('should return correct state for SET_BLOGS', () => {
    const action = {
        type: 'SET_BLOGS',
        blogs: blogs
    }
    expect(blogsReducer(undefined,action)).toEqual(action.blogs)
})

test('should return correct state for EDIT_BLOG', () => {
    const action = {
        type: 'EDIT_BLOG',
        id: blogs[0].id,
        updates: {
            'title': 'updatingggg'
        }
    }
    expect(blogsReducer(blogs,action)[0].title).toEqual(action.updates.title)
})

test('should not edit state with wrong id', () => {
    const action = {
        type: 'EDIT_BLOG',
        id: 'wrongid',
        updates: {
            'title': 'updatinggg'
        }
    }
    expect(blogsReducer(blogs,action)).toEqual(blogs)
})

test('should return correct state for REMOVE_BLOG', () => {
    const action = {
        type: 'REMOVE_BLOG',
        id: blogs[0].id
    }
    expect(blogsReducer(blogs,action)).toEqual(blogs.filter((blog) => blog.id !== action.id))
})