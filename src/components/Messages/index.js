import './style.scss';
import React from "react";
import { messages } from '../../consts';
import { createRandomTitle, getRandMessage } from '../../utils';
import { MessagesItem } from './MessagesItem';

const message = getRandMessage(messages);
const title = createRandomTitle(6, 1, 'Title');

export const Messages = () => {
    return(
        <main className="center">
            <div className="container">
                <div className="messages">
                    <MessagesItem title={title} message={message} />
                </div>
            </div>
            
        </main>
        
    )
}