import React, {Component} from 'react';
import Navbar from './Navbar'
import '../App.css';

class Accueil extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar></Navbar>
            
                <div class="">
                    <img src="../../img/worldseed_thumbnail.jpeg" alt=""/>
                </div>
            </React.Fragment>
        )
    }
}

export default Accueil;