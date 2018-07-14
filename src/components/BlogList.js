import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'
import getVisibleBlogs from '../selectors/getVisibleBlogs'


export const BlogList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Blogs</div>
            <div className="show-for-desktop">Blogs</div>
            <div className="show-for-desktop">Author</div>
        </div>
        <div className="list-body">
            {
                props.blogs.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Blogs</span>
                    </div>
                ) : (
                    props.blogs.map((blog) => 
                    <BlogListItem key={blog.id} {...blog} />)
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        blogs: getVisibleBlogs(state.blogs,state.filters)
    }
}

export default connect(mapStateToProps)(BlogList)


