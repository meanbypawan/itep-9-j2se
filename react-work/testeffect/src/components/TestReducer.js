import { useReducer } from "react";
import Header from "./Header";

function TestReducer(){
  const [counter,dispatch] = useReducer((state,action)=>{
    if(action.type == "increment")
     state = state + 1;
    else if(action.type == "decrement")
      state = state - 1;
    else if(action.type=="increment-by")
      state = state + action.payload;  
    return state;  
  },100);
  return <>
    <Header/>
    <div className="container mt-5">
      <h1 className="mt-5">Test Reducer</h1>
      {counter}
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"increment-by",payload: 5})}>Increment By 5</button>
    </div>
  </>
}

export default TestReducer;