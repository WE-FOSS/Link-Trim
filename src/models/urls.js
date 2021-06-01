const mongoose = require('mongoose');
const validator = require('validator');

const urlSchema = new mongoose.Schema({
    inputURL:{
        type:String,
    },
    outputURL:{
        type:String,
    },
},{
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
      }
});

const DNS = new mongoose.model("dns",urlSchema);
module.exports = DNS;
