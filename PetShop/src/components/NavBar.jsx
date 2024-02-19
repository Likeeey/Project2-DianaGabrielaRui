import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav>
            <div>
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/about"><h4>About</h4></Link>
                <Link to="/adoption"><h4>Adoption</h4></Link>
            </div>
        </nav>
    )
}

export default Navbar;