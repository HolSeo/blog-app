import React from 'react'
import { shallow } from 'enzyme'
import { BlogList } from '../../components/BlogList';
import blogs from '../fixtures/blogs'

test('should render BlogList correctly with blogs', () => {
    const wrapper = shallow(<BlogList blogs={blogs} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render BlogList message with no blogs', () => {
    const wrapper = shallow(<BlogList blogs={[]}/>)
    expect(wrapper).toMatchSnapshot()
})