import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const BlogListItem = (props) => (
    <div>
        <Link to={`edit/${props.id}`}>{props.title} by {props.name} {moment(props.createdAt).format("MMMM Do YYYY")}</Link>
    </div>
)

export default BlogListItem