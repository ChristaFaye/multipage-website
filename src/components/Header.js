import companyname from '../img/logo.png'
import React from 'react';
import { Link } from "react-router-dom";
// import AboutPage from './pages/AboutPage';
// import logo from '../img/logo2.png'

class Header extends React.Component {
    render() {
        return(
            <header>
                <img id="companyname" src={companyname} alt="Compeer" />
                <nav>  
                    
                    <Link to="/home">{this.props.home}</Link>  
                    <Link to="/aboutpage">{this.props.about}</Link> 
                    <Link to="/membershippage">{this.props.membership}</Link>  
                    <Link to="/inclusionspage">{this.props.inclusions}</Link> 
                    <Link to="/contactpage">{this.props.connect}</Link> 
                    
                </nav>
                
            </header>
        )
    }
}
export default Header;