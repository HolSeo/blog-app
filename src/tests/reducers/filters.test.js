import moment from 'moment'
import filtersReducer from "../../reducers/filters";
import { filters, altFilters } from '../fixtures/filters'


test('should set default state correctly', () => {
    const action = {
        type: '@@INIT'
    }
    expect(filtersReducer(undefined,action)).toEqual({
        'text': '',
        sortBy: 'date',
        'startDate': moment().startOf('month'),
        'endDate': moment().endOf('month')
    })
})

test('should return correct state for SET_TEXT_FILTER', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'two'
    }
    expect(filtersReducer(filters, action).text).toEqual(action.text)
})

test('should return correct state for SET_START_DATE', () => {
    const action = {
        type:'SET_START_DATE',
        startDate: 0
    }
    expect(filtersReducer(filters,action).startDate).toEqual(action.startDate)
})

test('should return correct state for SET_END_DATE', () => {
    const action = {
        type: 'SET_END_DATE',
        startDate: 0
    }
    expect(filtersReducer(filters, action).endDate).toEqual(action.endDate)
})

