require('dotenv').config()
const express = require('express');
const app=express();
const port =80;

app.get('/',(req,res)=>{res.send('Hello World')})

app.listen(port,(req,res)=>{
    console.log(`Server successfully started on http://localhost:${port}`)
})