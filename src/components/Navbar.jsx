import dummyLogo from "../assets/dummyLogo.png"
import profileIcon from "../assets/profile-icon.png"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
    <nav className="navbar">
      <div className="navbar-items">
        <Link to = '/' > 
          <img
            className="logo"
            src={dummyLogo}
            alt="eCommerce App logo"
          />
        </Link>

        <span>Our Store name </span>

        <Link to = '/userLogin' >
          <img
            className="user"
            src={profileIcon || "swap-user-image"}
            alt="user profile"
          />
        </Link>

      </div>
    </nav>
    )

}

export default Navbar