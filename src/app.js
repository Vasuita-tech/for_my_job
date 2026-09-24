const db = require('./db/database.js');
const {reg} = require('./routes/reg.js');

const express = require('express');
const app = express();


app.get('/test', async (req, res) => {
    res.send('сервер работает порт:3000')
});



app.get('/registration', async (req, res) =>{
    const {name, pass} = req.query;
    // console.log(req.query.name, req.body)
    reg(name, pass);
    
})



app.listen(3000, ()=>{
    console.log('server start')
});
