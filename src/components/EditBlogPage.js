import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import { startEditBlog, startRemoveBlog } from '../actions/blogs'

export class EditBlogPage extends React.Component {
    onRemove = () => {
        this.props.startRemoveBlog(this.props.blog.id)
        this.props.history.push('/')
    }
    onSubmit = (blog) => {
        this.props.startEditBlog(this.props.blog.id,blog)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <BlogForm 
                    blog={this.props.blog} 
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove Blog</button>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
        blog: state.blogs.find((blog) => blog.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEditBlog: (id, updates) => dispatch(startEditBlog(id,updates)),
    startRemoveBlog: (id) => dispatch(startRemoveBlog(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditBlogPage)

