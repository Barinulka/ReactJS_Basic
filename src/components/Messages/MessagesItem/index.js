import '../style.scss';
import React from "react";

export const MessagesItem = ({title, message}) => {
    return(
        <div className="message">
            <h2 className="message-title">{title}</h2>
            <p className="message-text">{message}</p>
        </div>
    )
}