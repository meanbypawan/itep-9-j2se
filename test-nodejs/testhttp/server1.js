/*
   http :-
     it is used to create server
*/
import http from "http";

const server = http.createServer((request,response)=>{
    response.write("Hello Client [Message From Server]");
    response.end();
});

server.listen(3000,()=>{
    console.log("Server Started......");
});