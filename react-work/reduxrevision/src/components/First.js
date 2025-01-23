import { useSelector } from "react-redux"

export default ()=>{
    const {m2,m3} = useSelector((store)=>store.WishingMessages);
    return <>
      <h1>First Component...{m2} : {m3}</h1>
    </>
}