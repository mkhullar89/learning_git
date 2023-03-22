class commonMethods{
  async createOne(model,data){
    try{
      await model.create(data)
      return {"statusCode":200,data:{message:"Data Created Successfully"}}
    }catch(err){
      console.log(err)
      return {"statusCode":400,data:{message:err.message}}
    }
    
  }
}