import '../style.scss';
import React from "react";
import { Message } from './Message';

export const MessagesItem = ({ messages }) => {
    return messages.map((mess) => (
        <Message author={mess.author} text={mess.text} key={mess.id} />
    ));
}