import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import BlogForm from '../../components/BlogForm';
import blogs from '../fixtures/blogs'

test('should render BlogForm correctly', () => {
    const wrapper = shallow(<BlogForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render with blog data', () => {
    const wrapper = shallow(<BlogForm blog={blogs[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid input', () => {
    const wrapper = shallow(<BlogForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(1)
    expect(wrapper).toMatchSnapshot()
})

test('should set title on input', () => {
    const wrapper = shallow(<BlogForm />)
    const value = 'titletesting'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('title')).toEqual(value)
})

test('should change createdAt based on input', () => {
    const wrapper = shallow(<BlogForm />)
    const now = moment()
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should change body on input', () => {
    const wrapper = shallow(<BlogForm />)
    const value = 'bodytesting'
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('body')).toEqual(value)
})

test('should change calendarFocused when invoked', () => {
    const wrapper = shallow(<BlogForm />)
    const focused = true
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})