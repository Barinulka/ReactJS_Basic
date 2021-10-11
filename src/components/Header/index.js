import React from "react";
import { ChatList } from "./ChatList";
import './style.scss';

export const Header = () => {
    return(
        <header className="header center">
            <p className="header-title">Learn ReactJS</p>
            <ChatList />
        </header>
    )
}