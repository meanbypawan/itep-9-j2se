import { useDispatch, useSelector } from "react-redux";
import { incrementEvenCounter, incrementOddCounter } from "../redux-config/CounterSlice";

function ShowCounter(){
    let {evenCounter,oddCounter} = useSelector((store)=>store.DataCounter);
    const dispatch = useDispatch();
    return <>
      <h3>Show counter</h3>
      <button onClick={()=>dispatch(incrementEvenCounter())}>{evenCounter}</button>
      <button onClick={()=>dispatch(incrementOddCounter())}>{oddCounter}</button>
    </>
}

export default ShowCounter;