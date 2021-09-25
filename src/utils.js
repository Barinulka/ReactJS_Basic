export const getRandMessage = (messages) => {
    let message = Math.floor(Math.random() * messages.length);

    return messages[message];
}

export const createRandomTitle = (max, min, text) => {
    let title = `${text}${Math.floor(Math.random() * (max - min + 1) + min)}`;

    return title;
}