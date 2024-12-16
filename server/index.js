const express = require("express");
const mongoose =require("mongoose");
const UserModle = require("./modle/users");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors())

app.post('/contactUs', (req,res)=>{
    const {first ,last, email, phone,note} = req.body;
    
        UserModle.create({first,last , email, phone , note})
        .then(userData => res.json(userData))
        .catch(err=> res.json(err))
})

mongoose.connect("mongodb://localhost:27017/")
const Port = 3001;
app.listen( Port , ()=>{
    console.log(`server is running in the port ${Port}`)
})







