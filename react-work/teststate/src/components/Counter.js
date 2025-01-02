import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 100
        };
    }
    incrementCounter = ()=>{
      this.setState({counter: this.state.counter+1});
    }
    render(){
        console.log("Render called....");
        return <>
          <h1>Counter Component...</h1>
          <label>Counter : {this.state.counter}</label>
          <button onClick={this.incrementCounter}>Increment</button>
        </>
    }
}

export default Counter;