import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import logo from '../img/Logo_Title.png'

class Footer extends React.Component {

    render(){
        return (
            <React.Fragment>
                <footer className="page-footer">
                    <div className="container center">
                        <div className="row">
                            <div className="col l4 s12">
                                <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Legal Notice</a></li>
                                <li><p className="grey-text text-lighten-3" href="#!">Contact Us</p></li>
                                <li><p className="grey-text text-lighten-3" href="#!">(+33)6 00 00 00 00</p></li>
                                <li><p className="grey-text text-lighten-3" href="#!">contact@fireball.com</p></li>
                                </ul>
                            </div>
                            <div className="col l4 s12">
                                <img className="responsive-img" src={logo} />
                                <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Discover</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Articles</a></li>
                                </ul>
                            </div>
                            <div className="col l4 s12">
                                <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Terms of Service</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container center">
                        © 2022 Fireball. All rights reserved
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;