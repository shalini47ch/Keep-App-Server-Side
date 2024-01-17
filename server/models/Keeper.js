const Keeper=new mongoose.Schema({
    title:String,
    description:String
})

const newmodel=mongoose.model("Keeper",Keeper)
module.exports=newmodel;