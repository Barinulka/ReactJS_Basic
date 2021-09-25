export const getRandMessage = (messages) => {
    let message = Math.floor(Math.random() * messages.length);

    return messages[message];
}
