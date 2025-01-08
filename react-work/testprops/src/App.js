import { useState } from "react";
import First from "./components/First";
import X from "./components/X";
import Y from "./components/Y";

function App(){
  const [counter,setCounter] = useState(100);
  return <>
    <h1>App Component...</h1>
    {/* <First data={data} /> */}
    <label>Counter : {counter}</label>
    <X counter={counter} setCounter={setCounter}/>
    <Y counter={counter} setCounter={setCounter}/>
  </>
}
export default App;