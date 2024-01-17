//This is basically  the entry point of aur express
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Keeper=require("./models/Keeper")

const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())

//mongo db atlas is down at the moment
mongoose.connect("",
    {useNewUrlParser:true,useUnifiedTopology:true},()=>{
        console.log("Data base connected successfully")
    }
)
//once it is connected we will use Keeper.findOne({})

// app.get("/",(req,res)=>{
//     res.send("Server running successfully")

// })
//we need 3 apis one for adding the keeper other for updating the keeper and the last for deleting the keeper
app.get("/api/getKeeper",(req,res)=>{

})

//now the next one is to update the keeper app and that will be done by the post request
app.post("/api/addNewKeeper",(req,res)=>{

})

app.post("/api/delete",(req,res)=>{

})


//now show the server on which it is running
app.listen(8000,()=>{
    console.log("Server running on port number 8000");
})
