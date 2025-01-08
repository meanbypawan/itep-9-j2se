import Third from "./Third";

function Second({data}){
    return <>
      <h2>Second Component..</h2>
      {data}
      <Third data={data}/>
    </>
}

export default Second;