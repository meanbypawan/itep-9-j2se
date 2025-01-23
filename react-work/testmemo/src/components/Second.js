import React from "react";

function Second({data,counter}){
    console.log("Second render...");
    return <>
      <h1>Second Component...{counter}</h1>
      {data.name} : {data.age} : {data.contact}
    </>
}

const memoizedSecond  = React.memo(Second);
export default memoizedSecond;