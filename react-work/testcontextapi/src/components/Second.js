import { useContext } from "react";
import Third from "./Third";
import { CounterContext, MessageContext } from "../App";

export default function Second(){
    let message = useContext(MessageContext);
    let {counter,setCounter} = useContext(CounterContext);
    return <>
      <h1>Second Component...{message}</h1>   
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
      <Third/> 
    </>
}
