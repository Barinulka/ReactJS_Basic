import React from "react";
import { Switch, Route } from "react-router-dom";
import { Chats } from ".";
import { Messages } from "./routes/Messages";

export const Cts = () => {
    return (
        <>
        <h3>Страница чатов</h3>
        <Chats />
        <Switch>
            <Route path="/chats/:chatId" component={Messages} />
        </Switch>
        </>
    );
}