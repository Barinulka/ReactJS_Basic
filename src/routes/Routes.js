import { Switch, Route } from "react-router-dom";
import React from "react";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Chats } from "./Chats";
import { Messages } from "./Chats/routes/Messages";
import { NoChat } from "./Chats/routes/NoChat";


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chats" component={Chats} />
            <Route path="/chats/:chatId" component={Messages} />
            <Route exact path="/chats/nochat" component={NoChat} />

            <Route path="*">
                <h3>404 Page Not Found</h3>
            </Route>
        </Switch>
    );
}