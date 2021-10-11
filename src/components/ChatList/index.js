import React from "react";
import { List, ListItem } from "@material-ui/core";

export const ChatList = () => {

    const chatList = [
        {
            name: 'Чат 1',
            id: 'chat1',
        }, 
        {
            name: 'Чат 2',
            id: 'chat2',
        },
    ]

    return (
        <div className="chats" >
            <List>
                { chatList.map((chat) => (
                    <ListItem disablePadding key={ chat.id }> { chat.name }</ListItem>
                )) }
            </List>
        </div>
    )
}