const mongoose=require("mongoose")

const KeeperSchema=new mongoose.Schema({
    title:String,
    description:String
})

const newmodel=mongoose.model("Keeper",KeeperSchema)
module.exports=newmodel;