import { Link } from "react-router-dom";

function Header(){
    return <>
      <div  className="container-fluid header d-flex align-items-center justify-content-around">
       <Link to="/">
        <button style={{border:"1px solid white"}} className="btn bg-transparent text-white">Home</button>
       </Link>
       <Link to="/about">
        <button style={{border:"1px solid white"}} className="btn bg-transparent text-white">About us</button>
       </Link>
       <Link to="/contact">
         <button style={{border:"1px solid white"}} className="btn bg-transparent text-white">Contact us</button>
       </Link>
       <Link to="/sign-in">
         <button style={{border:"1px solid white"}} className="btn bg-transparent text-white">Sign in</button>
       </Link>
       <Link to="/sign-up">
         <button style={{border:"1px solid white"}} className="btn bg-transparent text-white">Sign up</button>
       </Link>
      </div>
    </>
}

export default Header;