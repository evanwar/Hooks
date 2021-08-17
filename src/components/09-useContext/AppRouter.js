import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { NavBar } from './NavBar';

import AboutScreen from './AboutScreen';
import HomeScreem from './HomeScreem';
import LoginScreen from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomeScreem} />
                        <Route exact path="/about" component={AboutScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        <Redirect to="/" />
                    </Switch>
                </div>



            </div>
        </Router>
    )
}
