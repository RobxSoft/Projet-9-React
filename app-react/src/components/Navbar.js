import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import Logo from '../img/Logo_Title.png';
import WhiteLogo from '../img/White_Logo.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            callback: props.callback || null,
        }
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });        
    }

    handleSearchChange(event){
        let text = event.target.value
        //changing state
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.search = text
        this.setState(stateCopy)
        
        if (this.state.callback){
            this.state.callback(text)
        }
    }

    render(){
        return (
            <React.Fragment>
                <nav className="navup">
                    <div className="nav-wrapper">
                    <a href="#!" className="left hide-on-med-and-down"><img className="responsive-img" src={WhiteLogo}/></a>
                    <ul className="hide-on-med-and-down">
                        <li className="center"><a href="#">Shop</a></li>
                        <li className="center"><a href="#">About Us</a></li>
                    </ul>
                    <a href="#!" className="brand-logo center"><img className="responsive-img" src={Logo}/></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><MaterialIcon className="material-icons" icon="menu"/></a>
                    <ul className="hide-on-med-and-down right">
                        <li className="center"><a href="#">Basket</a></li>
                        <li className="center profile"><a href="#">Profile</a></li>
                    </ul>
                    </div>
                </nav>
                <nav className="navdown">
                    <div className="nav-wrapper">
                    <div className="searchbar white valign-wrapper">
                        <div className="search-icon"><MaterialIcon icon="search"/></div>
                        <input className="search-input" placeholder="Search..." value={this.state.search} onChange={(event) => this.handleSearchChange(event)}></input>
                    </div>
                    <ul className="hide-on-med-and-down">
                        <li className="center"><a href="#">Home</a></li>
                        <li className="center"><a href="#">Discover Us</a></li>
                        <li className="center"><a href="#">Articles</a></li>
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