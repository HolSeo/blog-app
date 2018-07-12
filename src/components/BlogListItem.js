import React from 'react'
import { Link } from 'react-router-dom'

export const BlogListItem = (props) => (
    <div>
        <Link to={`edit/${props.id}`}>{props.title} - {props.body} - {props.createdAt}</Link>
    </div>
)

export default BlogListItem