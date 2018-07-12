import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

export const BlogList = (props) => (
    <div>
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
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(BlogList)


