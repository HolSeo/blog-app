import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from '../reducers/auth'
import blogsReducer from '../reducers/blogs'
import filtersReducer from '../reducers/filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            blogs: blogsReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}