import { Component } from "react";

class EvenOdd extends Component{
  constructor(){
    super();
    this.state = {
        counter: 100,
        evenCounter: 0,
        oddCounter: 1
    }
  }  
  incrementCounter = ()=>{
    this.setState({counter: this.state.counter + 1});
  }
  render(){
    return <>
      <h1>EvenOdd Component...</h1>
      <button onClick={this.incrementCounter}>Counter : {this.state.counter}</button>
      <button onClick={()=>{this.setState({evenCounter: this.state.evenCounter+2})}}>Even Counter : {this.state.evenCounter}</button>
      <button onClick={()=>{this.setState({oddCounter: this.state.oddCounter+2})}}>Odd Counter : {this.state.oddCounter}</button>
      <hr/>
    </>
  }
}

export default EvenOdd;