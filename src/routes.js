import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Contact from './pages/ContactUs'
import product from './pages/Product'
import Register from './pages/Register'
import Management from './pages/Management'
import Board from './pages/Board'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {!localStorage.getItem('username') ? (
                <Redirect to="/login" />


            ) : (
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/product" component={product} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/board' component={Board} />
                        {localStorage.getItem('status') === 'admin' ? (
                            <Route exact path="/management" component={Management} />
                        ) : (
                                <Redirect to="/" />
                            )}
                    </Switch>
                )}
        </Switch>

    )
}

export default Routes