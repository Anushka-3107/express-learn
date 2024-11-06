
const express = require('express');
const app = express();
const phone = require('./data.js')


app.get('/',(req,res)=>{
    res.send(
        '<h1>Home Page</h1><a href="/api/phone">Phone</a>'
    )
})

app.get('/api/phone', (req,res) => {
    // passing only few items in phone data
    const newData = phone.map((data)=>{
        const {id,name} = data;
        return {id,name};
    })

    res.json(newData);
})



app.listen(3000,()=>{
    console.log('hello server is created ....');
});