import React from 'react'
import BlogListFilters from './BlogListFilters'
import BlogList from './BlogList'
import BlogsSummary from './BlogsSummary'

const DashboardPage = () => (
    <div>
        <BlogsSummary />
        <BlogListFilters />
        <BlogList />
    </div>
)

export default DashboardPage;