import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbardiv">
                <Link to="/" style={{ textDecoration: 'none' }}><h4>Home</h4></Link>
                <Link to="/about" style={{ textDecoration: 'none' }}><h4>About</h4></Link>
                <Link to="/adoption" style={{ textDecoration: 'none' }}><h4>Adoption</h4></Link>
            </div>
        </nav>
    )
}

export default Navbar;