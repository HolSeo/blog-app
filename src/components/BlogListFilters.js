import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setStartDate, setEndDate, setTextFilter } from '../actions/filters'

export class BlogListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onChange = (e) => {
        const text = e.target.value
        this.props.setTextFilter(text)
    }
    onDatesChange = ({ startDate,endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (focusedInput) => {
        this.setState(() => ({ calendarFocused: focusedInput }))
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="search" 
                    onChange={this.onChange}
                    value={this.props.filters.text}
                />
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId="startDate"
                    endDate={this.props.filters.endDate}
                    endDateId="endDate"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogListFilters)