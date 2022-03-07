import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedGame from '../components/FeaturedGame';

import WS_Background from '../img/worldseed_thumbnail.jpeg'
import ContainerPopular from '../components/ContainerPopular';
import ContainerSales from '../components/ContainerSales';

class Home extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
            
                <div className="featured-shop row ">
                    <div className="image-container col s12 l8">
                        <div className="shadow-img">
                            <img src={WS_Background} alt=""/>
                        </div>
                        <h2 className="flow-text">World Seed</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis porta lacus, sit amet egestas dolor tristique vel. Integer dignissim eros lobortis ipsum semper faucibus.
                        </p>
                        <a className="waves-effect waves-light btn-medium">Buy</a>
                    </div>

                    <div className="featured-list col s12 l4">
                        <div className="box">
                            <FeaturedGame/>
                            <FeaturedGame/>
                            <FeaturedGame/>
                            <FeaturedGame/>
                            <FeaturedGame/>
                        </div>
                    </div>
                </div>
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
                <div className="container-games row">
                    <h2 className="flow-text">Sales</h2>
                    <a class="waves-effect btn z-depth-0">SEE ALL</a>
                    <div className="send-game-container">
                        <ContainerSales/>
                        <ContainerSales/>
                        <ContainerSales/>
                        <ContainerSales/>
                    </div>
                </div>
                <div className="featured-title container center">
                        <h2 className="title">Featured Articles</h2>
                </div>
                <div className="featured-article row ">
                    <div className="image-container col s12 m12 l6">
                        <div className="simple-img">
                            <img src={WS_Background} alt=""/>
                        </div>
                    </div>
                    <div className="col s12 m12 l6">
                        <h3 className="flow-text">World Seed Finally Released!</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis porta lacus, sit amet egestas dolor tristique vel. Integer dignissim eros lobortis ipsum semper faucibus.
                        </p>
                        <a className="waves-effect waves-light btn-medium">READ MORE</a>
                    </div>
                </div>
                <div className="featured-article row ">
                    <div className="col s12 m12 l6">
                        <h3 className="flow-text">World Seed Finally Released!</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis porta lacus, sit amet egestas dolor tristique vel. Integer dignissim eros lobortis ipsum semper faucibus.
                        </p>
                        <a className="waves-effect waves-light btn-medium">READ MORE</a>
                    </div>
                    <div className="image-container col s12 m12 l6">
                        <div className="simple-img">
                            <img src={WS_Background} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container-games row">
                    <h2 className="flow-text">Popular Articles</h2>
                    <a class="waves-effect btn z-depth-0">SEE ALL</a>
                    <div className="send-game-container">
                        <div className="col m12 l8">
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <div className="game-container">
                            </div>
                            <div classname="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-games row">
                    <h2 className="flow-text">Latest Articles</h2>
                    <a class="waves-effect btn z-depth-0">SEE ALL</a>
                    <div className="send-game-container">
                        <div className="col m12 l8">
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                        <div className="col m12 l8">
                            <div className="game-container">
                                <h3>TITRE</h3>
                                <p>0$</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;