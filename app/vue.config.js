const cat= require("./public/mock/data.json")
module.exports={
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get("/api/app",(req,res)=>{
        res.json({
          errCode:0,
          list:cat
        })
      })
    }
  }
}