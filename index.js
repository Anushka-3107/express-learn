
const express = require('express');
const app = express();
const phone = require('./data.js')


app.get('/',(req,res)=>{
    res.send(
        '<h1>Home Page</h1><a href="/api/phone">Phone</a>'
    )
})

// app.get('/api/phone/:phoneID', (req,res) => {
//     // params
//     console.log(req.params)
//     const {phoneID} = req.params;
//     const singleProduct = phone.find((product) =>
//         product.id === Number(phoneID)
//     )

//     if(!singleProduct){
//         res.status(404).send('product not found')
//     }
//     res.json(singleProduct);
// })


// query
app.get('/api/v1/query', (req,res)=>{
    let sortedData = [...phone];
    console.log(sortedData)
    const {search,limit} = req.query;
    
    if(search){
        sortedData = sortedData.filter((data)=>{
            return(
                data.name
                .toLowerCase()
                .startsWith(search)
            )
        })
        // console.log(sortedData)
    }

    if(limit){
        sortedData = sortedData.slice(
            1,Number(limit)
        )
    }

    res.json(sortedData)
})

app.listen(3000,()=>{
    console.log('hello server is created ....');
});