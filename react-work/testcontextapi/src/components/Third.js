import { useContext } from "react"
import { CounterContext, DataContext, MessageContext } from "../App"

export default function Third(){
    let message = useContext(MessageContext);
    let {a,b} = useContext(DataContext);
    let {counter,setCounter} = useContext(CounterContext);
    return <>
      <h1>Third Component...{message}</h1>    
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
      <h2>Addition : {a+b}</h2>
    </>
}
