const express = require('express');
const app = express();

const logger = (req,res,next) =>{
    console.log(`${new Date()}, Request[${req.method}, [${req.url}]]`);
    next();
}

app.use(logger);

app.listen(3000,()=>{
    console.log('hello, server started..')
})