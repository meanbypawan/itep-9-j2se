import { useContext } from "react";
import Second from "./Second";
import { CounterContext, MessageContext } from "../App";
export default function First(){
    let data = useContext(MessageContext);
    let {counter,setCounter} = useContext(CounterContext);
    console.log(data);
    return <>
      <h1>First Component...{data}</h1> 
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>   
      <Second/>
    </>
}
