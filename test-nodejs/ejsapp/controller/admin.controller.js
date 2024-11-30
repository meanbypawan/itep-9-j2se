import pool from "../db/dbConfig.js";
export const singInPage = (request,response,next)=>{
    response.render("sign-in.ejs");
};

export const signInAction = (request,response,next)=>{
    let {email,password} = request.body;
    pool.getConnection((err,con)=>{
        if(!err){
          let sql = "select * from admin where email =? and password =?";
          con.query(sql,[email,password],(err,result)=>{
            con.release();
            if(!err){
              if(result.length!=0)
              return response.end("Sign in success....");
              return response.end("Sing in failed...");
            }
              else{
                console.log(err);
                return response.end("Something wrong...");  
          }
          });         
        }
        else
         console.log(err);
    })
}