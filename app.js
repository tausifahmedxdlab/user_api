require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5500;
const DB_URL = process.env.DB_URL;

const app = express();
console.log(DB_URL)
mongoose.connect(DB_URL, ({ useNewUrlParser: true, useUnifiedTopology: true }))
const DataBase = mongoose.connection;
DataBase.on("error",(error)=>{
    if(error){
        console.log("Error in Connecting to DataBase")
    }
})
DataBase.once("open",()=>{
    console.log("Connection to DataBase Successfully");
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.use("",require('./routes/router'));

app.listen(PORT,error=>{
    if(error){
        console.log("Error in Opening App",error);
    }
    else{
        console.log(`App is Listining At:http://localhost:${PORT}`);
    }
})


