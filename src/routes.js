import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Test from './pages/Test'



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            {!localStorage.getItem('username') ? (
                <Redirect to="/login" />
            ) : (
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path='/test' component={Test} />
                    </Switch>
                )}
        </Switch>

    )
}

export default Routes