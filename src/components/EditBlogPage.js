import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import { startEditBlog } from '../actions/blogs'

export class EditBlogPage extends React.Component {
    onSubmit = (blog) => {
        this.props.startEditBlog(this.props.blog.id,blog)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                {console.log(this.props)}
                <BlogForm 
                    blog={this.props.blog} 
                    onSubmit={this.onSubmit}
                />
                <button>Remove Blog</button>
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
    startEditBlog: (id, updates) => dispatch(startEditBlog(id,updates))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditBlogPage)
