require('dotenv').config()
const mongoose = require('mongoose');
const connectionURL = "mongodb+srv://linkTrim:"+process.env.DB_PASSWORD+"@we-foss.qpkiw.mongodb.net/linkTrimDB?retryWrites=true&w=majority/DNS-map";
mongoose.connect(connectionURL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is OK");
}).catch((e)=>{
    console.log(e);
});