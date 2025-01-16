import axios from "axios";
import { useState } from "react"
import Api from "../../apis/Api";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-config/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event)=>{
       try{ 
        event.preventDefault();
        let response = await axios.post(Api.SIGN_IN,{email,password});
        dispatch(setUser(response.data));
        navigate("/"); 
       }
       catch(err){
        console.log(err);
        toast.error("Invalid user");
       }
    }
    return <>
      <ToastContainer/>
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