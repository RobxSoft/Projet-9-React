import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import ContainerPopular from '../components/ContainerPopular';

class Games extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container-games row">
                    <h2 className="flow-text">Popular Games</h2>
                    <a class="waves-effect btn z-depth-0">SEE ALL</a>
                    <div className="send-game-container">
                        <ContainerPopular/>
                        <ContainerPopular/>
                        <ContainerPopular/>
                        <ContainerPopular/>
                    </div>
                    
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Games;