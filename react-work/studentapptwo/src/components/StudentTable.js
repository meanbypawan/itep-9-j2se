function StudentTable({studentList,defaultBranch,deleteStudent}){
    return <>
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
          {studentList.filter((student)=>{return defaultBranch=="ALL" || defaultBranch==student.branch}).map((student,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.mobile}</td>
            <td>{student.branch}</td>
            <td><button onClick={()=>deleteStudent(student.roll)} className="btn btn-outline-danger">Delete</button></td>
          </tr>)}
        </tbody>
      </table>
    </>
}

export default StudentTable;