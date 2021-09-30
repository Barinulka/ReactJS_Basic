import './style.scss';
import React, { useCallback, useEffect, useState } from "react";
import { arrMess } from '../../consts';
import { getRandMessage } from '../../utils';
import { MessagesItem } from './MessagesItem';
import { MessagesForm } from './MessagesForm';



export const Messages = () => {

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

    return(
        <main className="center">
            <div className="container">
                <div className="form-item">
                    <MessagesForm onSend={ handleSend }/>
                </div>
                <div className="messages">
                    <MessagesItem messages={ messages } />
                </div>
            </div>
            
        </main>
        
    )
}