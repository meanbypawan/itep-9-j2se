import Counter from "./components/Counter";
import EvenOdd from "./components/EvenOdd";
import Product from "./components/Product";
import Test from "./components/Test";

const { Component } = require("react");

class App extends Component{
  render(){
    return <>
      {/* <Test/> */}
      {/* <Counter/> 
      <hr/>
      <EvenOdd/> */}
      <Product/>
    </>
  }
}

export default App;