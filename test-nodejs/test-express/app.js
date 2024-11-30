import express from "express";

const app = express();
app.use((request,response,next)=>{
    console.log("Thanks for connecting......");
    next();
});
app.get("/home",(request,response,next)=>{
  response.write("Home Page");
  response.end();
});
app.get("/about-us",(request,response,next)=>{
    response.write("About us Page");
    response.end();
});
app.get("/contact-us",(request,response,next)=>{
    response.write("Contact Page");
    response.end();
});

app.listen(3000,()=>{
    console.log("Server Started....");
});