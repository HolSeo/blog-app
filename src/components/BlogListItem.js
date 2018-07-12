import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const BlogListItem = (props) => (
    <div>
        <Link to={`edit/${props.id}`}>{props.title} - {props.body} - {moment(props.createdAt).format("MMM Do YY")}</Link>
    </div>
)

export default BlogListItem