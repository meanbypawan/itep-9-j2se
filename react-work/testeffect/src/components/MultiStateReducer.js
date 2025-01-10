import { useReducer } from "react";
import Header from "./Header";

function MultiStateReducer(){
    // state : {counter:100, evenCounter: 0, oddCounter: 1}
    const [state,dispatch] = useReducer((state,action)=>{
        if(action.type == "increment-counter"){
          state.counter = state.counter + 1;
        }
        else if(action.type == "increment-even-counter"){
           state.evenCounter = state.evenCounter + 2;
        }
        else if(action.type == "increment-odd-counter"){
           state.oddCounter = state.oddCounter + 2;
        }
        return {...state};
    },{
        counter: 100,
        evenCounter: 0,
        oddCounter: 1
    });
    return <>
      <Header/>
      <div className="container mt-5">
        <h1>Multi State Reducer</h1>
        <h2>
            <label className="text-danger">Counter : [{state.counter}]</label>
            <label className="text-primary ml-2">Even : [{state.evenCounter}]</label>
            <label className="text-success ml-2">Odd : [{state.oddCounter}]</label>
        </h2>
        <button onClick={()=>dispatch({type:"increment-counter"})} className="btn  btn-danger">Counter</button>
        <button onClick={()=>dispatch({type:"increment-even-counter"})} className="btn btn-primary ml-2">Even Counter</button>
        <button onClick={()=>dispatch({type:"increment-odd-counter"})} className="btn btn-success ml-2">Odd Counter</button>
      </div>
    </>
}

export default MultiStateReducer;