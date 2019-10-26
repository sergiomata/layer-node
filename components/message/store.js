const listMessage = [];

const addmMssage = (message) => {
    listMessage.push(message);
}

const getMessage = () => {
    return listMessage;
}
modules.exports = {
    add: addMessage,
    list: getMessage,
}