import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WS_Background from '../img/worldseed_thumbnail.jpeg';
import Logo from '../img/Logo_Title.png';
import ContainerArticles from '../components/ContainerArticles';
import Loader from '../components/Loader';


class GameInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            game: null,
            loaded: false
        }
    }

    componentDidMount(){
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        const game = this.props.state.games.data.find(game=>game.id===parseInt(id))
        this.setState({game: game, loaded: true})
    }

    render(){
        if (this.state.loaded == false){
            return <Loader />
        }
        return(
            <React.Fragment>
                <Navbar/>
                <div className="gameinfo-container white-text">
                    <div className="row">
                    <h1>{this.state.game.attributes.title}</h1>
                        <div className="col right-part s12 m8 l8">
                            <img src={WS_Background }/>
                            <h2>
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
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="col left-part s12 m4 l4">
                            <img src={Logo} />
                            <div className="container">
                                <p>00$</p>
                                <div><a className="purchase waves-effect waves-light btn-large ">PURCHASE</a></div>
                                <div><a className="add-basket waves-effect waves-light btn-large">ADD TO BASKET</a></div>
                                <div className="row">
                                    <div className="col s12 m12 l12">
                                        <div className="col left s6 m6 l6"><p>Developper</p></div>
                                        <div className="col right s6 m6 l6"><p>insert</p></div>
                                    </div>
                                    <div className="col s12 m12 l12">
                                        <div className="col left s6 m6 l6"><p>Editor</p></div>
                                        <div className="col right s6 m6 l6"><p>insert</p></div>
                                    </div>
                                    <div className="col s12 m12 l12">
                                        <div className="col left s6 m6 l6"><p>Release date</p></div>
                                        <div className="col right s6 m6 l6"><p>insert</p></div>
                                    </div>
                                    <div className="col s12 m12 l12">
                                        <div className="col left s6 m6 l6"><p>Platform</p></div>
                                        <div className="col right s6 m6 l6"><p>insert</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-games">
                        <h2 className="flow-text">Dedicated Articles</h2>
                        <a className="waves-effect btn z-depth-0">SEE ALL</a>
                        <div className="send-game-container">
  
                        </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default GameInfo;