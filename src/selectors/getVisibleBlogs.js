import moment from 'moment'

const getVisibleBlogs = (blogs,filters) => {
    blogs = blogs.reduce(function (previous, current) {
        let object = previous.filter(object => object.id === current.id);
        if (object.length == 0) {
            previous.push(current);
        }
        return previous;
    }, []);

    return blogs.filter((blog) => {
        const createdAtMoment = moment(blog.createdAt)
        const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment,'day') : true
        const textMatch = blog.title.toLowerCase().includes(filters.text.toLowerCase())
        
        return textMatch && startDateMatch && endDateMatch
    }).sort((a,b) => {
        a.createdAt < b.createdAt ? 1 : -1
    })
}

export default getVisibleBlogs