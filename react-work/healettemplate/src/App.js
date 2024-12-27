import { Component } from "react";
import Header from "./components/Header";
import SliderSection from "./components/SliderSection";
import Shop from "./components/Shop";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends Component{
  render(){
    return <>
      <Header/>
      <SliderSection/>
      <Shop/>
      <About/>
      <Footer/>
    </>
  }
}

export default App;