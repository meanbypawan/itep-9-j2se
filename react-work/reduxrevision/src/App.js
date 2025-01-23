import { useDispatch, useSelector } from "react-redux";
import First from "./components/First";
import { useEffect } from "react";
import {fetchCategory} from "./redux-config/CategorySlice";
import Category from "./components/Category";
function App(){
  const {m1} = useSelector((store)=>{return store.WishingMessages});
  const dispatch = useDispatch();
  useEffect(()=>{
    loadCategory();
  },[])
  
  const loadCategory = ()=>{
    dispatch(fetchCategory());
  }
  return <>
    <h1>App component...{m1}</h1>
    {/* <First/> */}
    <Category/>
  </>
}

export default App;