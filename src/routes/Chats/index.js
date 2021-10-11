import { Link, List, ListItem } from "@material-ui/core";
import { Link as RoutesLink, Switch, Route} from 'react-router-dom';
import React from "react";
import { chatList } from "./chatsArr";
import './style.scss';
// import { useState } from "react";

export const Chats = (props) => {
    // const [chats, setChats] = useState(chatList);

    return (
        <div className="chats" >
            <List>
                { chatList.map((chat) => (
                    <ListItem disablePadding key={ chat.id }><Link component={RoutesLink} to={`chats/${chat.id}`}>{ chat.name }</Link></ListItem>
                )) }
            </List>
        </div>
    )
}