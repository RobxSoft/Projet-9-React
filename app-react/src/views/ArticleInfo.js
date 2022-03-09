import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WS_Background from '../img/worldseed_thumbnail.jpeg';
import Logo from '../img/Logo_Title.png';
import ContainerArticles from '../components/ContainerArticles';
import GameFrame from '../components/GameFrame.js';



class ArticleInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: props.state.articles,
            loaded: props.state.loaded,
        }     
    }


    render(){
        return(     
            <React.Fragment>
                <Navbar/>
                <div className="gameinfo-container center white-text">
                    <div className="container">
                        <h1>Titre de l'article</h1>
                        <img src={WS_Background }/>
                        <h2 className="left-align">
                            Lorem ipsum dolor sit amet, sit amet egestas dolor tristique vel. Integer dignissim eros lobortis ipsum semper faucibus.
                        </h2>
                        <div className="row">
                            <div className="col type s6 m6 l6">
                                <p>Type</p>
                                <div>
                                    <a href="#">Action</a>
                                    <a href="#">Adventure</a>
                                    <a href="#">Horror</a>
                                    <a href="#">Roleplay</a>
                                    <a href="#">Survival</a>
                                </div>
                            </div>
                            <div className="col s6 m6 l6">
                                <p>Specifications</p>
                                <div>
                                    <a href="#">Support controller</a>
                                    <a href="#">Cooperation</a>
                                    <a href="#">Multiplayer</a>
                                    <a href="#">Solo</a>
                                </div>
                            </div>
                        </div>
                        <p className="left-align content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>Article wrote by DANIELL</p>
                        <p>Posted on 20/10/2021</p>
                    </div>
                </div>


                <div className="container-games">
                        <h2 className="flow-text">Dedicated Articles</h2>
                        <a className="waves-effect btn z-depth-0">SEE ALL</a>
                        <div className="send-game-container">
                            <ContainerArticles article={this.state.articles.data[0].attributes} />
                            <ContainerArticles article={this.state.articles.data[0].attributes} />
                            <ContainerArticles article={this.state.articles.data[0].attributes} />
                            <ContainerArticles article={this.state.articles.data[0].attributes} />
                        </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default ArticleInfo;