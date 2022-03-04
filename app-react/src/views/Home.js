import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import WS_Background from '../img/worldseed_thumbnail.jpeg'

class Home extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar></Navbar>
            
                <div className="FeaturedShop row ">
                    <div className="col m12 l8">
                        <div className="ShadowImg">
                            <img src={WS_Background} alt=""/>
                        </div>
                        <h2 className="flow-text">World Seed</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis porta lacus, sit amet egestas dolor tristique vel. Integer dignissim eros lobortis ipsum semper faucibus.
                        </p>
                        <a className="waves-effect waves-light btn-medium">Buy</a>
                    </div>

                    <div className="col m12 l4">
                        
                    </div>
                </div>
                <div className="container-games row">
                    <h2 className="flow-text">Popular Games</h2>
                    <div className="send-game-container">
                        <div className="col m12 l8">
                            <a class="waves-effect btn z-depth-0">SEE ALL</a>
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <a class="waves-effect btn z-depth-0">SEE ALL</a>
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <a class="waves-effect btn z-depth-0">SEE ALL</a>
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <a class="waves-effect btn z-depth-0">SEE ALL</a>
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="container-games row">
                    <h2 className="flow-text">Sales</h2>
                    <div className="send-game-container">
                        <div className="col m12 l8">
                            <a class="waves-effect btn z-depth-0">SEE ALL</a>
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <a class="waves-effect btn z-depth-0">SEE ALL</a>
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <a class="waves-effect btn z-depth-0">SEE ALL</a>
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <a class="waves-effect btn z-depth-0">SEE ALL</a>
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-title container center">
                    <h2 className="title">Featured Articles</h2>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;