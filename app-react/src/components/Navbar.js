import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import Logo from '../img/Logo_Title.png';
import WhiteLogo from '../img/White_Logo.png';

class Navbar extends React.Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });        
    }

    render(){
        return (
            <React.Fragment>
                <nav>
                    <div className="nav-wrapper">
                    <a href="#!" className="left"><img className="responsive-img" src={WhiteLogo}/></a>
                    <ul className="hide-on-med-and-down">
                        <li className="center"><a href="#">Shop</a></li>
                        <li className="center"><a href="#">About Us</a></li>
                    </ul>
                    <a href="#!" className="brand-logo center"><img className="responsive-img" src={Logo}/></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><MaterialIcon className="material-icons" icon="menu"/></a>
                    <ul className="hide-on-med-and-down right">
                        <li><a href="#">Basket</a></li>
                        <li><a href="#">Profile</a></li>
                    </ul>
                    </div>
                </nav>
        
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Navbar;