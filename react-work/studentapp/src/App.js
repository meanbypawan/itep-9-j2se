import { Component } from "react";
import Header from "./components/Header";
import data from "./data";
class App extends Component{
  constructor(){
    super();
    this.state = {
      studentList: data,
      branchList: ["CS","IT","CV","EC"]
    }
  }
  addRecord = ()=>{
    let roll =  this.roll.value;
    let name = this.name.value;
    let mobile = this.mobile.value;
    let branch = this.branch.value;
    let newStudent = {roll,name,mobile,branch};
    this.setState({studentList: [...this.state.studentList,newStudent]});
  }
  deleteRecord = (roll)=>{
   let index=this.state.studentList.findIndex((student)=>{return student.roll == roll});
   this.state.studentList.splice(index,1);
   this.setState({studentList: [...this.state.studentList]}); 
  }
  render(){
    return <>
      <Header/>
      <div className="container">
      <div className="row mt-3">
        <div className="col-md-6">
          <input ref={(rollInput)=>this.roll=rollInput} id="roll" type="text" className="form-control" placeholder="Enter roll number"/>
        </div>
        <div className="col-md-6">
          <input ref={(nameInput)=>this.name = nameInput} type="text" className="form-control" placeholder="Enter student name"/>
        </div>  
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <input ref={(contactInput)=>this.mobile = contactInput} type="text" className="form-control" placeholder="Enter contact number"/>
        </div>
        <div className="col-md-6">
          <select ref={(branchInput)=>this.branch = branchInput} className="form-control">
            <option>Select branch</option>
            {this.state.branchList.map((branch,index)=><option key={index}>{branch}</option>)}
          </select>
        </div>  
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <button className="btn btn-success" onClick={this.addRecord}>ADD</button>
        </div>  
        <div className="col-md-6">
          <button className="btn btn-info">CS({this.state.studentList.filter((student)=>{return student.branch=="CS"}).length})</button>
          <button className="btn btn-success ml-2">IT({this.state.studentList.filter((student)=>{return student.branch=="IT"}).length})</button>
          <button className="btn btn-warning ml-2">CV({this.state.studentList.filter((student)=>{return student.branch=="CV"}).length})</button>
          <button className="btn btn-primary ml-2">EC({this.state.studentList.filter((student)=>{return student.branch=="EC"}).length})</button>
          <button className="btn btn-secondary ml-2">Total({this.state.studentList.length})</button>
        </div>
      </div>  
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Roll number</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Branch</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.studentList.map((student,index)=><tr key={index}>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.mobile}</td>
            <td>{student.branch}</td>
            <td><button onClick={()=>this.deleteRecord(student.roll)} className="btn btn-outline-danger">Delete</button></td>
          </tr>)}
        </tbody>
      </table>
      </div>
    </>
  }
}

export default App;