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
        console.log("fullMessage", fullMessage);
        resolve(fullMessage);
    });
};

module.exports = {
    addMessage,
}