function Header() {
    return <>
        <nav className="navbar navbar-expand-sm bg-dark">

            <ul className="navbar-nav">
                <li className="nav-link">
                    <a className="text-white" href="#">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Categories</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Sign In</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Sign up</a>
                </li>
            </ul>

        </nav>
    </>
}

export default Header;