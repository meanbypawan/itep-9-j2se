import { Component } from "react";
class App extends Component{
  constructor(){
    super();
    console.log("Constructor executed....");
    this.state = {
      counter: 100
    };
  }
  shouldComponentUpdate(nextProps,nextState){
    //
    console.log(nextState);
    if(nextState.counter%2==0)
     return true;
    return false;
  }
  componentDidMount(){
    console.log("componentDidMount() executed...");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate() executed....");
  }
  componentWillUnmount(){
    console.log("componentWillUnMount() executed....");
  }
  render(){
    console.log("render() executed....");
    return <>
       <h1>App Component...</h1>    
       <button onClick={()=>this.setState({counter: this.state.counter + 1})}>{this.state.counter}</button>
    </>
  }
}

export default App;