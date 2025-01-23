import { useCallback, useMemo, useState } from "react";
import First from "./components/First";
import MemoizedSecond from "./components/Second";
import MemoizedThird from "./components/Third";
import MemoizedFourth from "./components/Fourth";
function App(){
  const [counter,setCounter] = useState(100);
  const [eventCounter,setEvenCounter] = useState(0);
  const incrementEvenCounter = ()=>{
    setEvenCounter(eventCounter+1);
  }
  let data = {
    name: "ABC",
    age: 25,
    contact: 9009111222
  };
  data = useMemo(()=>{return data},[]);
  let sayHello = ()=>{
    window.alert("Hello Friends...");
  }
  sayHello = useCallback(()=>sayHello,[eventCounter]);
  return <>
    <h1>App component....</h1>
    <button onClick={()=>setCounter(counter+1)}>{counter}</button>
    <button onClick={incrementEvenCounter}>Even-counter : {eventCounter}</button>
    <First/>
    <MemoizedSecond counter={counter} data={data}/>
    <MemoizedThird sayHello={sayHello}/>
    <MemoizedFourth>
      <p>Text For fourth component....</p>
      <h3>It is children of fourth component...</h3>
    </MemoizedFourth>
  </>
}

export default App;