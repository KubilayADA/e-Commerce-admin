import dummyLogo from "../assets/dummyLogo.png"

const Navbar = () => {
    return (
    <nav className="nav-bar">
        <img
          className="logo"
          src={dummyLogo}
          alt="My eCommerce App logo"
        />
        <span>Our Store name </span>
    </nav>
    )

}

export default Navbar