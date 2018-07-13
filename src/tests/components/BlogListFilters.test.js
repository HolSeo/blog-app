import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { BlogListFilters } from '../../components/BlogListFilters';
import { filters } from '../fixtures/filters'

let wrapper, setStartDate, setEndDate, setTextFilter

beforeEach(() => {
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setTextFilter = jest.fn()
    wrapper = shallow(<BlogListFilters 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
        setTextFilter={setTextFilter}
        filters={filters}
    />)
})

test('should call setTextFilter with correct arguments', () => {
    wrapper.find('input').simulate('change', {
        target: { value: 'testing' }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith('testing')
})

test('should call setStartDate with correct arguments', () => {
    const startDate = moment(0)
    const endDate = moment(0).add(3,'days')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate,endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})