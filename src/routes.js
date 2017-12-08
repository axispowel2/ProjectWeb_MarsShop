import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            {!localStorage.getItem('username') ? (
                <Redirect to="/login" />
            ) : (
                    <Switch>
                        <Route exact path="/" component={Main} />
                    </Switch>
                )}
        </Switch>
    )
}

export default Routes