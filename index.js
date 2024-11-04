const express = require('express')
// console.log(express)

const app = express(); //initialzition of express

app.get('/',(req,res)=>{
    res.send('hello world')
})

// another method
app.get('/about',(req,res)=>{
    res.send('hello anushka')
})

app.listen(8000,(req,res)=>{
    console.log('running ...');
})

// express.get
