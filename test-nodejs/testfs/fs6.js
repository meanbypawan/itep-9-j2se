/*
  Readable
  Writable
*/
import fs, { read } from "fs";
const readStream =  fs.createReadStream("./data.txt");

let data = "";
readStream.on("data",(chunk)=>{
    data = data + chunk;
});
readStream.on("end",()=>{
    console.log(data);
});
readStream.on("error",(err)=>{
    console.log(err);
});