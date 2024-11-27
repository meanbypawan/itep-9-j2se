import fs from "fs";
const readStream = fs.createReadStream("abc.txt");
const writeStream = fs.createWriteStream("xyz.txt");

readStream.pipe(writeStream);
console.log("succes...");