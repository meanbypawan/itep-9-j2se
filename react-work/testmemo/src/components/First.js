import React, { useEffect } from "react";

function First(){
    console.log("First render....");
    return <>
      <h1>First Component..</h1>
    </>
}

export default React.memo(First);