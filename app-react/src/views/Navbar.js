import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import logo from '../img/Logo_Title.png'

class Accueil extends React.Component {

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
                    <div class="nav-wrapper">
                    <a href="#!" class="brand-logo"><img class="responsive-img" src={logo}/></a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><MaterialIcon class="material-icons" icon="menu"/></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                    </div>
                </nav>
        
                <ul class="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Accueil;