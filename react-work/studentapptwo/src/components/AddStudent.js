import { useRef } from "react";

function AddStudent({branchList,addStudent,studentList,setDefaultBranch}){
    const rollRef = useRef();
    const nameRef = useRef();
    const mobileRef = useRef();
    const branchRef = useRef();
    return <>
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
          <button onClick={()=>addStudent(rollRef.current.value,nameRef.current.value,mobileRef.current.value,branchRef.current.value)} className="btn btn-success">ADD</button>
        </div>
        <div className="col-md-6">
          <button onClick={()=>setDefaultBranch("CS")} className="btn btn-primary ml-2">CS({studentList.filter((student)=>{return student.branch=="CS"}).length})</button>
          <button onClick={()=>setDefaultBranch("IT")} className="btn btn-danger ml-2">IT({studentList.filter((student)=>{return student.branch=="IT"}).length})</button>
          <button onClick={()=>setDefaultBranch("EC")} className="btn btn-info ml-2">EC({studentList.filter((student)=>{return student.branch=="EC"}).length})</button>
          <button onClick={()=>setDefaultBranch("CV")} className="btn btn-warning ml-2">CV({studentList.filter((student)=>{return student.branch=="CV"}).length})</button>
          <button onClick={()=>setDefaultBranch("ALL")} className="btn btn-secondary ml-2">Total({studentList.length})</button>
        
        </div>
      </div>
    </>
}

export default AddStudent;