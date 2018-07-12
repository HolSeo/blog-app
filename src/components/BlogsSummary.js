import React from 'react'
import { connect } from 'react-redux'


export const BlogsSummary = (props) => (
    <div>
        <h1>You have {props.blogs.length} blogs.</h1>
    </div>
)

const mapStateToProps = (state) => ({
    blogs: state.blogs
})

export default connect(mapStateToProps)(BlogsSummary)