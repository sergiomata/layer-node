const store = require('./store');

const addMessage = (user,message) => {
    return new Promise ((resolve,reject) =>{

        if(!user || !message){
            console.error("[messageController] no hay usuario o mensaje")
            return reject('datos incompletos');
        }
        const fullMessage = {
            user:user,
            message: message,
            date: new Date(),
        }
        store.add(fullMessage);

        resolve(fullMessage);
    });
};

const getMessages = () =>{
    return new Promise ((resolve,reject) =>{
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessages,
}