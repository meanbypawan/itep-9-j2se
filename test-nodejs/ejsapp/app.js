import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routes/admin.route.js";
const app = express();

app.set("view engine","ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/admin",AdminRouter);

app.listen(3000,()=>{
    console.log("Server started...");
});