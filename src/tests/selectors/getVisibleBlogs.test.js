import moment from 'moment'
import getVisibleBlogs from "../../selectors/getVisibleBlogs";
import blogs from '../fixtures/blogs'

test('should correcly filter based on text', () => {
    const filters = {
        text: 'two',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    expect(getVisibleBlogs(blogs,filters)).toEqual([ blogs[1] ])
})

test('should correcly filter based on startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    expect(getVisibleBlogs(blogs, filters)).toEqual([blogs[0], blogs[1]])
})

test('should correcly filter based on endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    expect(getVisibleBlogs(blogs, filters)).toEqual([blogs[0], blogs[2] ])
})