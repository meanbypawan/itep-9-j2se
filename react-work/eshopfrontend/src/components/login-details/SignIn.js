import axios from "axios";
import { useState } from "react"
import Api from "../../apis/Api";

export default function SignIn(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = async (event)=>{
       try{ 
        event.preventDefault();
        let response = await axios.post(Api.SIGN_IN,{email,password});
        console.log(response.data);
       }
       catch(err){
        console.log(err);
       }
    }
    return <>
      <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <div className="" style={{width:"30%", height:"auto", boxShadow:"10px 10px 10px 10px grey"}}>
          <h3 className="bg-dark text-white text-center p-2">Sign here</h3>
          <form className="p-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <input onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="Enter email id" className="form-control"/>
            </div>
            <div className="form-group">
                <input onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Enter password" className="form-control"/>
            </div>
            <div className="form-group">
                <button style={{width:"100%"}} className="btn btn-outline-secondary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
}