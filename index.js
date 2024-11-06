
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
    const {phoneID} = req.params;
    const singleProduct = phone.find((product) =>
        product.id === Number(phoneID)
    )

    if(!singleProduct){
        res.status(404).send('product not found')
    }
    res.json(singleProduct);
})



app.listen(3000,()=>{
    console.log('hello server is created ....');
});