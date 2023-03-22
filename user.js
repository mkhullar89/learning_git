const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
  firstName:{type:String,required:true},
  password:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  createdOn:{type:Date,default:Date.now}
})

const userModel=new mongoose.model("userModel",userSchema)
module.exports=userModel