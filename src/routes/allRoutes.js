const express = require('express');
const router = express.Router();
const {nanoid} = require('nanoid')
const DNS = require('../models/urls')




router.get("/:inpURL",async(req,res)=>{

    try{
        const { inputURL } = await DNS.findOne({
            "inputText": req.params.inpURL
        }, 'inputURL');

        
        await res.redirect(302,inputURL);
    }catch(e){
        res.status(400).send(e).end();
    }
});



router.get("/",async(req,res)=>{
    try{
        const getUrl = await DNS.find({
            
        });
        res.status(201).send(getUrl);
    }catch(e){
        res.status(400).send(e);
    }
});



// Create a new URL
router.post("/url", async (req,res)=>{

    try{
    const randomstring = nanoid(4);
    const inputURL = req.body.inputURL;
    const inputText = `${randomstring}-${req.body.inputText}`;
    const outputText = inputText!== "" ? "localhost:3000"+"/"+inputText : "localhost:3000"+"/"+nanoid(10);
    

    const body = {
        "inputURL" : inputURL,
        "inputText" : inputText,
        "outputText" : outputText
    }

    const newDNS = new DNS(body);

   await newDNS.save();
   await res.status(201).send(newDNS);    
}

catch(e){
        res.status(400).send(e);
    
}}
)

module.exports = router