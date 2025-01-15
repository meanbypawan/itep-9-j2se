import { useDispatch, useSelector } from "react-redux";
import First from "./First";
import { incrementCounter, incrementEvenCounter, incrementOddCounter } from "./redux-config/CounterSlice";

function App(){
  const {m1,m2} = useSelector((store)=>store.WishingMessages);
  const {counter,evenCounter,oddCounter} =  useSelector((store)=>store.DataCounter);
  const dispatch = useDispatch();
  return <>
    <h1>App Component....{m1} : {m2}</h1>
    <button onClick={()=>dispatch(incrementCounter({x: 10}))}>Counter : {counter}</button>
    <button onClick={()=>dispatch(incrementEvenCounter())}>EC : {evenCounter}</button>
    <button onClick={()=>dispatch(incrementOddCounter())}>OC : {oddCounter}</button>
    <hr/>
    <First/>
  </>
}
export default App;