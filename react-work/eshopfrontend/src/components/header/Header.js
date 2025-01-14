import { Link } from "react-router-dom";

function Header() {
    return <>
        <nav className="navbar navbar-expand-sm bg-dark">

            <ul className="navbar-nav">
                <li className="nav-link">
                    <Link className="text-white" to="/">Products</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Categories</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/sign-in">Sign In</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Sign up</a>
                </li>
            </ul>

        </nav>
    </>
}

export default Header;