import { useRef, useState } from "react";
import Data from "./data";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudent from "./components/AddStudent";
export default function App(){
  const [studentList,setStudentList] = useState(Data);
  const [branchList,setBranchList] = useState(["CS","IT","EC","CV"]);
  const [defaultBranch,setDefaultBranch] = useState("ALL");
  
  //let rollRef;
  const addStudent = (roll,name,mobile,branch)=>{
    let newStudent = {roll,name,mobile,branch};
    setStudentList([...studentList,newStudent]);
  }
  const deleteStudent = (roll)=>{
   if(window.confirm("Do you want to delete it ?")){ 
    let index =  studentList.findIndex((student)=>{return student.roll == roll});
    studentList.splice(index,1);
    setStudentList([...studentList]);
   }
  }
  return <>
     <Header/> 
     <div className="container mt-3">
      <AddStudent branchList={branchList} addStudent={addStudent} studentList={studentList} setDefaultBranch={setDefaultBranch}/>
      <StudentTable studentList={studentList} defaultBranch={defaultBranch} deleteStudent={deleteStudent}/>
     </div>
  </>
}