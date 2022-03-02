import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import logo from '../img/Logo_Title.png'

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
                    <a href="#!" className="brand-logo"><img className="responsive-img" src={logo}/></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><MaterialIcon className="material-icons" icon="menu"/></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
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