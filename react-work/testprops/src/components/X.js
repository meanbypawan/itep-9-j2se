function X({counter,setCounter}){
   return <>
     <h1>X Component...</h1>
     <button onClick={()=>setCounter(counter+1)}>X counter button ({counter})</button>
   </>
}

export default X;