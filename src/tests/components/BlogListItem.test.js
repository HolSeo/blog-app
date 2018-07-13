import React from 'react'
import { shallow } from 'enzyme'
import { BlogListItem } from '../../components/BlogListItem';
import blogs from '../fixtures/blogs'

test('should render BlogListItem correctly', () => {
    const wrapper = shallow(<BlogListItem {...blogs[0]}/>)
    expect(wrapper).toMatchSnapshot()
})