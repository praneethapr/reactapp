import "../../css/NavBar.css"
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
    return (
        <div>
            <div class="container">
                <div class="footer-content">
                    <h3>Contact Us</h3>
                    <p>Phone:+91 9345422833</p>
                    <p>Address your street address 123 street</p>
                </div>
                <div class="deet">
                    <h2>Quick Link</h2>
                    <ol>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Experience">Experience</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ol>
                </div>
                <div class="reva">
                    <h2>Follow Us</h2>
                    <ul>

                        <li><a href=""><FaInstagram /> Instagram</a></li>
                        <li><a href=""><FaGithub />Github  </a></li>
                        <li><a href=""><CiLinkedin />LinkedIn</a></li>
                        <li><a href=""><CiFacebook />Facebook</a></li>

                    </ul>
                </div>
            </div>
        </div>

    )

}
export default Footer;