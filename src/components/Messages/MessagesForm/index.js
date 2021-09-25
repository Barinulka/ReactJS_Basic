import React, { useState } from "react";

export const MessagesForm = ({ onSend }) => {

    const [text, setText] = useState('');

    // Получаем текст из инпута
    const handleChange = (e) => {
        setText(e.target.value);
    }

    // Собираем массив и затем обнуляем state text
    const handleSubmit = (e) => {
        e.preventDefault();
        onSend({
            author: 'Me',
            text: text,
            id: Date.now() + Math.floor(Math.random() * (1000,100)),
        });
        setText('');
    }

    return(
        <form className="form" onSubmit={ handleSubmit }>
            <input type="text" value={ text } onChange={ handleChange } className="text_field" />
            <input type="submit" value="Отправить" className="btn" />
        </form>
    );
}