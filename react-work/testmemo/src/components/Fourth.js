import React from "react";

function Fourth({children}){
    console.log("Fourth render");
    return <>
      <h1>Fourth Component...</h1>
      {children}
    </>
}

const MemoizedFourth = React.memo(Fourth);
export default MemoizedFourth;