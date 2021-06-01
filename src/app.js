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
    const inputURL = req.body.inputURL;
    const inputText = req.body.inputText;
    const outputText = "https://localhost:3000/"+inputText;
    const body = {
        "inputURL" : inputURL,
        "inputText" : inputText,
        "outputText" : outputText
    }
    console.log(body)
    const newDNS = new DNS(body)
    newDNS.save().then(()=>{
        res.send(newDNS);
    }).catch((e)=>{
        res.send(e);
    })
});

app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`);
});