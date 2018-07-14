import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const BlogsSummary = (props) => {
    const blogWord = props.blogs.length === 1 ? 'blog' : 'blogs'
    return (
        <div className="page-header">
            <div className="content-container">
                <div className="page-header__container">
                    <h1 className="page-header__title">You have <span>{props.blogs.length}</span> {blogWord} in total.</h1>
                    <div className="page-header__summary">
                        <Link className="button" to="/create">Add Blog</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    blogs: state.blogs
})

export default connect(mapStateToProps)(BlogsSummary)