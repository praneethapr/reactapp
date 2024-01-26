import "../../css/NavBar.css"
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div class="host">
            <ol>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Experience">Experience</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ol>
        </div>
    )

}
export default NavBar;