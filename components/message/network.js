const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/',function(req,res){
    response.success(req,res,"Lista de mensajes",200);
});

router.post('/',function(req,res){
    
    controller.addMessage(req.body.user,req.body.message)
    .then((fullMessage) => {
        response.success(req,res,`${JSON.stringify(fullMessage)}`   ,201);
    })
    .catch((error) => {
        response.error(req,res,'Error en la informacion ',500, "");
    });

});

module.exports = router;