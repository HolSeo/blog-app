import React from 'react'
import { shallow } from 'enzyme'
import { EditBlogPage } from '../../components/EditBlogPage';
import blogs from '../fixtures/blogs'

let wrapper, startRemoveBlog, startEditBlog, history

beforeEach(() => {
    startRemoveBlog = jest.fn()
    startEditBlog = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditBlogPage 
        startRemoveBlog={startRemoveBlog} 
        startEditBlog={startEditBlog} 
        history={history}
        blog={blogs[0]}
    />)
})

test('should render EditBlogPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should call startEditBlog with correct arguments', () => {
    wrapper.find('BlogForm').prop('onSubmit')(blogs[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditBlog).toHaveBeenLastCalledWith(blogs[0].id, blogs[0])
})

test('should call startRemoveBlog correcty', () => {
    wrapper.find('button').simulate('click')
    expect(startRemoveBlog).toHaveBeenLastCalledWith(blogs[0].id)
    expect(history.push).toHaveBeenLastCalledWith('/')
})