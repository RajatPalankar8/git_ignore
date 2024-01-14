const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    
   res.send(` Hello, Subscribe to Proto Coders Point`)
})

app.listen(3000,()=>{
    console.log("LocalHost Express running at 3000");
})