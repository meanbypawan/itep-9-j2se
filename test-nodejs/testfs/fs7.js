import fs from "fs";

const writeStream = fs.createWriteStream("./pqr.txt",{flags: 'a'});

let data = "oriweur rwrirwer wrweioruweurwe werweurwer";

writeStream.write(data);
writeStream.end();

writeStream.on("error",(err)=>{
    console.log(err);
});
writeStream.on("finish",()=>{
    console.log("Operation success....");
});fs.readFile("./abc.txt","utf8",(err,data)=>{

});