import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/eshopdb")
.then(()=>{
    console.log("Database connected....");
}).catch(err=>{
    console.log(err);
})
export default mongoose.connection;