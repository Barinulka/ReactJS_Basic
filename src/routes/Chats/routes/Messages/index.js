import './style.scss';
import React, { useCallback, useEffect, useState } from "react";
import { MessagesForm } from './MessagesForm';
import { MessagesList } from './MessagesList';
import { Redirect, useParams } from 'react-router';
import { arrMess } from './consts';
import { getRandMessage } from './utils';
import { chatList } from '../../chatsArr';


export const Messages = () => {

    const {chatId} = useParams();

    const [messages, setMessages] = useState([]);

    const generateRoboMess = getRandMessage(arrMess);

    // получаем сообщения из MessagesForm
    const handleSend = useCallback((newMessages) => {
        setMessages([...messages, newMessages]);
    }, [messages]);

    // DidUpdate. Если массив с сообщениями не пустой, смотрим чтобы последнее было написанно человеком и генерируем робо сообщение
    useEffect(() => {
        if(messages.length && messages[messages.length - 1].author !== 'Robot') {
            const roboMessage = {
                author: 'Robot',
                text: generateRoboMess,
                id: Date.now() + Math.floor(Math.random() * (1000,100)),
            }
            setTimeout(() => setMessages([...messages, roboMessage]), 1000);
        }
    }, [messages, generateRoboMess])

    const chat = chatList.find(({id}) => id === chatId);

    if (!chat ) {
        return <Redirect to="/chats/nochat" />
    }

    return(
        <div className="container">
            <div className="form-item">
                <MessagesForm onSend={ handleSend }/>
            </div>
            <div className="messages">
                <MessagesList messages={ messages } />
            </div>
        </div>
        
    )
}