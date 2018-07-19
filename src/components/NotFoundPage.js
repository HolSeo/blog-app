import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="title">Error code: 404</h1><Link className="button" to="/">Go home</Link> 
            </div>
        </div>
        <div className="content-container">
            <h1 className="title">This page does not exist.</h1>
        </div>
    </div>
)

export default NotFoundPage;