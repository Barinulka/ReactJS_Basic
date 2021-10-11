import React from "react";

export const Message = ({ author, text, id }) => {
    return (
        <div className={(author === 'Robot') ? "message message-robo" : "message"} id={ id }>
            <h2 className="message-title">{ author }</h2>
            <p className="message-text">{ text }</p>
        </div>
    );
}