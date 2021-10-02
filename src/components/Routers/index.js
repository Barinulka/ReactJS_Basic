import React from "react";
import { Home } from '../Home';
import { Profile } from '../Profile';
import { BrowserRouter, Route, Switch, Link, } from "react-router-dom";

export const Routers = () => {

    return(
        <BrowserRouter >

        <header>
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>

                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </header>
            <Switch>
                <Route path='/profile'>
                    <Profile />
                </Route>

                <Route exact path='/'>
                    <Home />
                </Route>

                <Route >
                    <h3>404 Page Not Found</h3>
                </Route>
                
            </Switch>
        </BrowserRouter>
    );
}