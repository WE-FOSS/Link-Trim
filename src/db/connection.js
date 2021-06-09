require('dotenv').config()
const mongoose = require('mongoose');


const connectionURL = "mongodb+srv://"+process.env.DB_USER_NAME+":"+process.env.DB_PASSWORD+"@we-foss.qpkiw.mongodb.net/"+process.env.DB_DATABASE_NAME+"?retryWrites=true&w=majority/DNS-map";


mongoose.connect(connectionURL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connection is OK");
}).catch((e)=>{
    console.log(e);
});