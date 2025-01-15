import { useSelector } from "react-redux";

function First(){
   const {m1,m2} = useSelector((store)=>store.WishingMessages);
    return <>
      <h3>First Component...{m1} : {m2}</h3>
    </>
}

export default First;