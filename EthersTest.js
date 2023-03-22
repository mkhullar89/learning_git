const ethers=require("ethers")

class EthersFunctionality{
  constructor(){

  }

  async generateWallet(){
    //generate new Wallet for User
    return ethers.Wallet.createRandom()
    
  }

  async recoverWalletFromMnemonic(mnemonic){
    //mnemonic to be String
    //if string split on the basis of space
    //if length <12 then error
    let mnemonicArray=mnemonic.split(" ")
    if(mnemonicArray.length<12 || mnemonicArray.length>12){
      return {"statusCode":400,data:{message:"Not A Valid Mnemonic"}}
    }else{
      //recover 
      return ethers.Wallet.fromPhrase(mnemonic)  
    } 
  }

  async generateNewAccountFromMnemonic(mnemonic){
    let mnemonicArray=mnemonic.split(" ")
    if(mnemonicArray.length<12 || mnemonicArray.length>12){
      return {"statusCode":400,data:{message:"Not A Valid Mnemonic"}}
    }else{
      // We need user id for finding the records
    }
  }

}