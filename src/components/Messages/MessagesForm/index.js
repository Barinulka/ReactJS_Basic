import React, { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";

export const MessagesForm = ({ onSend }) => {

    const [text, setText] = useState('');
    const inputField = useRef(null);

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
        // inputField.current.focus();
    }

    // используем хук как didUpdate (без второго аргумента) для автофокуса на инпуте при загрузки и отправки сообщения
    useEffect(() => {
        inputField.current.focus();
    });

    

    return(
        <form className="form" onSubmit={ handleSubmit }>
            <TextField inputRef={ inputField } label="Message" variant="outlined" value={ text } onChange={ handleChange }/>
            <Button type="submit" variant="contained" >Отправить</Button>
        </form>
    );
}