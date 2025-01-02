import { Component } from "react";

class Test extends Component{
    render(){
       let id = 100;
       let name = "ABC";
       let salary = 949494;
       let dataList = ["Banana","Mango","Graphes","Papaya","Strawberry"]; 
       let age = 16;
       return <>
         <h1>Test Component...</h1>
         <p>Id : {id}</p>
         <p>Name : {name}</p>
         <p>Salary : {salary}</p>
         <hr/>
         {dataList.map((element,index)=><h3>{element}</h3>)}
         <hr/>
         {age>=18 ? <label style={{color:"green"}}>You can vote</label> : <label style={{color: "red"}}>You can not vote</label>}
       </>       
    }
}

export default Test;