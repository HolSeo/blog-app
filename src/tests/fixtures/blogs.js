import moment from 'moment'

export default [{
    id: '1',
    title: 'Title One',
    body: 'This is first one!',
    createdAt: 0
}, {
    id: '2',
    title: 'Title Two',
    body: 'This is second one!',
    createdAt: moment(0).add(3,'days').valueOf()
}, {
    id: '3',
    title: 'Title Three',
    body: 'This is third one!',
    createdAt: moment(0).subtract(5,'days').valueOf()
}]