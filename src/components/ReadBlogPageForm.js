import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

export const ReadBlogPageForm = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="title">{props.blog.title}</h1>
            <h2 className="title">By {props.blog.name}</h2>
            <h3 className="title">{moment(props.blog.createdAt).format('MMMM Do YYYY')}</h3>
        </div>
        <div className="content-container">
            <p className="body">{props.blog.body}</p>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    blog: state.blogs.find((blog) => blog.id === props.match.params.id),
})

export default connect(mapStateToProps)(ReadBlogPageForm)