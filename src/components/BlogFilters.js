import React from 'react'

export const BlogFilters = () => (
    <div>
        <input type="text" placeholder="Search posts"/>
        <select>
            <option>By Title</option>
            <option>By Date</option>
        </select>
    </div>
)

export default BlogFilters