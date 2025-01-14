import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ViewMore from "./components/product/ViewMore";
import BuyNow from "./components/order/BuyNow";
import SignIn from "./components/login-details/SignIn";

function App(){
  return <>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="view-more/:id" element={<ViewMore/>}/>
      <Route path="buy-now" element={<BuyNow/>}/>
      <Route path="sign-in" element={<SignIn/>}/>
    </Routes>
  </>
}
export default App;