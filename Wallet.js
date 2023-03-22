const mongoose=require("monggose")
const WalletSchema=new mongoose.Schema({
  user_id:{type:mongoose.type.ObjectId,ref:"userModel"},
  account_address:{type:String,required:true},
  account_publicKey:{type:String,required:true},
  account_privateKey:{type:String,required:true},
  account_mnemonicPhrase:{type:String,required:true},
  createdOn:{type:Date,default:Date.now}
})
const WalletModel=new mongoose.model("walletModel",WalletSchema)
module.exports=WalletModel
