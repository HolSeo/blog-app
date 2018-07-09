import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'

test('should render LoadingPage correctly', () => {
    const wrapper = <LoadingPage />
    expect(wrapper).toMatchSnapshot()
})