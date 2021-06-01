const express = require('express');
const app = express();
const DNS = require('./models/urls')

// require db connection
require('./db/connection');

// Assigning Port 
const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Service is up @ 3000");
});

// Create a new URL
app.post("/url",(req,res)=>{
    console.log(req.body);
    const newDNS = new DNS(req.body)
    newDNS.save().then(()=>{
        res.send(newDNS);
    }).catch((e)=>{
        res.send(e);
    })
});

app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`);
});