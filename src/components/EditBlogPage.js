import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
                <div className="page-header__edit">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                        <h3> <Link to={`/read/${this.props.blog.id}`}>Post readable at https://myblogger-seo.herokuapp.com/read/{this.props.blog.id}</Link> </h3>
                    </div>
                </div>
                <div className="content-container">
                    <BlogForm
                        blog={this.props.blog}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Blog</button>
                </div>
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

