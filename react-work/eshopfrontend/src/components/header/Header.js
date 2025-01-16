import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../redux-config/UserSlice";

function Header() {
    const {isLoggedIn} = useSelector((store)=>store.User);
    const dispatch = useDispatch();
    return <>
        <nav className="navbar navbar-expand-sm bg-dark">

            <ul className="navbar-nav">
                <li className="nav-link">
                    <Link className="text-white" to="/">Products</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Categories</a>
                </li>
                {(!isLoggedIn) && <li className="nav-item">
                    <Link className="nav-link text-white" to="/sign-in">Sign In</Link>
                </li>}

                {(!isLoggedIn) && <li className="nav-item">
                    <a className="nav-link text-white" href="#">Sign up</a>
                </li>}
                {isLoggedIn && <li className="nav-item">
                    <a style={{cursor: "pointer"}} className="nav-link text-white" onClick={()=>dispatch(signOut())}>Sign out</a>
                </li>}
            </ul>

        </nav>
    </>
}

export default Header;