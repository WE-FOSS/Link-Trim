const express = require('express');
const app = express();
const DNS = require('./models/urls')

// require db connection
require('./db/connection');

// Assigning Port 
const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/:inpURL",async(req,res)=>{
    try{
        const getUrl = await DNS.find({
            "inputText": req.params.inpURL
        });
        res.status(201).send(getUrl);
    }catch(e){
        res.status(400).send(e);
    }
});

app.get("/",async(req,res)=>{
    try{
        const getUrl = await DNS.find({
            
        });
        res.status(201).send(getUrl);
    }catch(e){
        res.status(400).send(e);
    }
});

// Create a new URL
app.post("/url",(req,res)=>{
    const inputURL = req.body.inputURL;
    const inputText = req.body.inputText;
    const outputText = req.get('host')+"/"+inputText;
    
    const body = {
        "inputURL" : inputURL,
        "inputText" : inputText,
        "outputText" : outputText
    }
    console.log(body)
    const newDNS = new DNS(body)
    newDNS.save().then(()=>{
        res.status(201).send(newDNS);
    }).catch((e)=>{
        res.status(400).send(e);
    })
});


app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`);
});