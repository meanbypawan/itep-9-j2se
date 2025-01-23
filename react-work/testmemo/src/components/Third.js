import React from "react";

function Third(){
    console.log("Third render....");
    return <>
      <h1>Third Component...</h1>
    </>
}

const memoizedThird = React.memo(Third);
export default memoizedThird;