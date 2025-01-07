import { useRef, useState } from "react";
import Data from "./data";
export default function App(){
  const [studentList,setStudentList] = useState(Data);
  const [branchList,setBranchList] = useState(["CS","IT","EC","CV"]);
  const rollRef = useRef();
  const nameRef = useRef();
  const mobileRef = useRef();
  const branchRef = useRef();
  //let rollRef;
  const addStudent = ()=>{
    let roll = rollRef.current.value;
    let name = nameRef.current.value;
    let mobile = mobileRef.current.value;
    let branch = branchRef.current.value;

    let newStudent = {roll,name,mobile,branch};
    setStudentList([...studentList,newStudent]);
  }
  return <>
     <div className="container-fluid p-2 text-center bg-danger">
        <small style={{color: "white",fontWeight:"bold",fontSize:"20px"}}>Student App</small>
     </div> 
     <div className="container mt-3">
      <div className="row mt-2">
        <div className="col-md-6">
          <input ref={rollRef} type="text" className="form-control" placeholder="Enter roll number"/>
        </div>
        <div className="col-md-6">
          <input ref={nameRef} type="text" className="form-control" placeholder="Enter student name"/>
        </div>
      </div>
      <div className="mt-2 mb-2 row">
        <div className="col-md-6">
          <input ref={mobileRef} type="text" className="form-control" placeholder="Enter contact number"/>
        </div>
        <div className="col-md-6">
          <select ref={branchRef} className="form-control">
            <option>Select branch</option>
            {branchList.map((branchName,index)=><option key={index}>{branchName}</option>)}
          </select>
        </div>
      </div>
      <div className="row mt-2 mb-2">
        <div className="col-md-6">
          <button onClick={addStudent} className="btn btn-success">ADD</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Roll number</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Branch</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.mobile}</td>
            <td>{student.branch}</td>
            <td><button className="btn btn-outline-danger">Delete</button></td>
          </tr>)}
        </tbody>
      </table>
     </div>
  </>
}