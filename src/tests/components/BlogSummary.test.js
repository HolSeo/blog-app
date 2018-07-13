import React from 'react'
import { shallow } from 'enzyme'
import { BlogsSummary } from '../../components/BlogsSummary';
import blogs from '../fixtures/blogs'

let wrapper

beforeEach(() => {
    wrapper = shallow(<BlogsSummary blogs={blogs}/>)
})

test('should render BlogSummary correctly', () => {
    expect(wrapper).toMatchSnapshot()
})