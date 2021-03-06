import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import AddBlogPage from '../components/AddBlogPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import EditBlogPage from '../components/EditBlogPage'
import ReadBlogPage from '../components/ReadBlogPage'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PublicRoute path="/read/:id" component={ReadBlogPage} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddBlogPage} />
                <PrivateRoute path="/edit/:id" component={EditBlogPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;