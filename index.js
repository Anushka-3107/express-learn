
const express = require('express');
const app = express();
const phone = require('./data.js')


app.get('/',(req,res)=>{
    res.send(
        '<h1>Home Page</h1><a href="/api/phone">Phone</a>'
    )
})

app.get('/api/phone/:phoneID', (req,res) => {
    // params
    console.log(req.params)
    const singleProduct = phone.find((product) =>
        product.id === 1
    )
    res.json(singleProduct);
})



app.listen(3000,()=>{
    console.log('hello server is created ....');
});