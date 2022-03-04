import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedGame from '../components/FeaturedGame';

import WS_Background from '../img/worldseed_thumbnail.jpeg'

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
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home;