import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/home",(request,response,next)=>{
  return response.render("home.ejs");
});
app.get("/about",(request,response)=>{
   return response.render("about.ejs");
});
app.listen(3000,()=>{
    console.log("Server Started....");
});



