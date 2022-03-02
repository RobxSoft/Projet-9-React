import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';


class Accueil extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar />
                <div class="">
                    <img src="../../img/worldseed_thumbnail.jpeg" alt=""/>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Accueil;