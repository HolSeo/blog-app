import React from 'react'

export const BlogListItem = (props) => (
    <div>
        Title: <h3>{props.title}</h3>
        Body: <h3>{props.body}</h3>
        Created: <h3>{props.createdAt}</h3>
    </div>
)

export default BlogListItem