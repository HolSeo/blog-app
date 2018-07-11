import React from 'react'
import { connect } from 'react-redux'
import { startAddBlog } from '../actions/blogs'
import BlogForm from './BlogForm'

export class AddBlogPage extends React.Component {
    onSubmit = (blog) => {
        this.props.startAddBlog(blog)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                Add Blog Page
                <BlogForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddBlog: (blog) => dispatch(startAddBlog(blog))
})

export default connect(undefined,mapDispatchToProps)(AddBlogPage)