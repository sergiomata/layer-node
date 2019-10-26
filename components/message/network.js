const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/',function(req,res){
    return controller.getMessages()
        .then((messageList => {
            response.success(req,res, messageList, 200);
        }))
        .catch(() =>{
            response.error(req, res, 'Unexpected Error',500, e);
        })
});

router.post('/',function(req,res){
    
    controller.addMessage(req.body.user,req.body.message)
        .then((fullMessage) => {
            response.success(req,res,fullMessage   ,201);
        })
        .catch((error) => {
            response.error(req,res,'Error en la informacion ',500, "");
        });

});

module.exports = router;