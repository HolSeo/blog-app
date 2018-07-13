import { setTextFilter, setStartDate, setEndDate } from "../../actions/filters";
import { filters, altFilters } from '../fixtures/filters'


test('should generate correct setTextFilter object', () => {
    expect(setTextFilter(filters.text)).toEqual({
        type: 'SET_TEXT_FILTER',
        text: filters.text
    })
})

test('should generate correct setStartDate object', () => {
    expect(setStartDate(altFilters.startDate)).toEqual({
        type: 'SET_START_DATE',
        startDate: altFilters.startDate
    })
})

test('should generate correct setEndDate object', () =>  {
    expect(setEndDate(altFilters.endDate)).toEqual({
        type: 'SET_END_DATE',
        endDate: altFilters.endDate
    })
})