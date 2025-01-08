import Second from "./Second";

function First({data}){
    console.log("In First Component...");
    //console.log(props);
    return <>
      <h2>First Component..</h2>
      {data}<br/>
      <Second data={data}/>
    </>
}

export default First;