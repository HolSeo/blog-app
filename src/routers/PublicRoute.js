import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

//{...props} gives you access to props such as history
export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated && props.match.path !== '/read/:id' ? (
                <Redirect to="/dashboard" />
            ) : (
                <Component {...props} />
            )
        )} />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)