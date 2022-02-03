import companyname from '../img/logo.png'
// import logo from '../img/logo2.png'

function Header() {
    return(
        <header>
            {/* <img id="logo" src={logo} alt="Compeer Logo" /> */}
            <img id="companyname" src={companyname} alt="Compeer" />
            <nav>
                <a href="#">About Us</a>
                <a href="#">Locations</a>
                <a href="#">Our Plans</a>
                <a href="#">Membership</a>
                <a href="#">Gallery</a>
                <a href="#">Connect</a>
            </nav>
        </header>
    )
}

export default Header;