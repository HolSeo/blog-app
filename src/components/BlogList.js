import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BlogListItem from './BlogListItem'
import getVisibleBlogs from '../selectors/getVisibleBlogs'


export const BlogList = (props) => (
    <div>
        <Link to="/create">Add Blog</Link>
        {
            props.blogs.length === 0 ? (
                <p>There are no blogs</p>
            ) : (
                props.blogs.map((blog) => 
                <BlogListItem key={blog.id} {...blog} />)
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        blogs: getVisibleBlogs(state.blogs,state.filters)
    }
}

export default connect(mapStateToProps)(BlogList)


