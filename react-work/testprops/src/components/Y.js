function Y({counter,setCounter}){
    const changeCounter = ()=>{
        setCounter(counter+1);
    }
    return <>
      <h1>Y Component...</h1>
      <button onClick={changeCounter}>Y counter button ({counter})</button>
    </>
 }
 
 export default Y;