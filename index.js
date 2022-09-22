const express = require('express');
const server = express();

server.get('/',(req,res)=>{
    return res.json({status: 'OK'})
});
server.get('/usuario',(req,res)=>{
    return res.json({status: 'OK'})
});

//Verbos HTTP
//GET: Receber dados de um Resourc
//POST: Enviar dados ou informações para serem pocessados por um resource
///PUT: atualizar o dados de um Resource
//DELETE: deletar dados de um Resource

server.listen(3000, ()=>{
    console.log('Servidor está funcionando...');
});