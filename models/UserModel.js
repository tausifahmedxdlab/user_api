const mongoose = require('mongoose');

const USER_SCHEMA = new mongoose.Schema({

    IMEI:{
        type:String,
        required:true
    },
    Voltage:{
        type:String,
        require:true
    },
    Current:{
        type:String,
        require:true
    },
    Power:{
        type:String,
        require:true,
    },
    Frequency:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("DeviceData",USER_SCHEMA);