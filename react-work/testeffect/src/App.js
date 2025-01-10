import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TestReducer from "./components/TestReducer";
import MultiStateReducer from "./components/MultiStateReducer";

function App(){
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/test-reducer" element={<TestReducer/>}/>
      <Route path="/multi-state" element={<MultiStateReducer/>}/>
    </Routes>
  </>
}

export default App;