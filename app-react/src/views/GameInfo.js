import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../img/Logo_Title.png';
import Loader from '../components/Loader';

import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Carousel } from 'react-materialize';

const LINK = "http://localhost:1337";


class GameInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            game: null,
            id: null,
            loaded: false
        }

        this.AddToBasket = this.AddToBasket.bind(this);
    }

    componentDidMount(){
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        const game = this.props.state.games.data.find(game=>game.id===parseInt(id))
        this.setState({game: game, loaded: true, id: parseInt(id)})

        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {});
    }

    AddToBasket(event){
        var existingEntries = JSON.parse(localStorage.getItem('basket')) || [];
        var item = existingEntries.find(item=>item.id === this.state.id);
        if (item){
            M.toast({html: 'Game is already in basked!'})
            return;
        }else{
            //new to basket
            existingEntries.push({
                id: this.state.id,
                amount: 1
            })
        }
        localStorage.setItem('basket', JSON.stringify(existingEntries));
        M.toast({html: 'Added game to basket!'})
    }

    render(){
        if (this.state.loaded == false){
            return <Loader />
        }

        const images = [];
        for (const [key, value] of Object.entries(this.state.game.attributes.images.data)) {
            images.push(LINK+value.attributes.url)
        }

        return(
            <React.Fragment>
                <Navbar/>
                <div className="gameinfo-container white-text">
                    <div className="row">
                    <h1>{this.state.game.attributes.title}</h1>
                        <div className="col right-part s12 m8 l8">
                            <Carousel
                                carouselId="Carousel-32"
                                images={images}
                                options={{
                                    fullWidth: true,
                                    indicators: true
                                }}
                            />
                            <h2>{this.state.game.attributes.main_description}</h2>
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
                            <p>{this.state.game.attributes.description}</p>
                        </div>
                        <div className="col left-part s12 m4 l4">
                            <div className="center-align">
                                <img className="" src={LINK+this.state.game.attributes.icon.data.attributes.url} />
                            </div>
                            
                            <div className="container">
                                <p>{this.state.game.attributes.price}$</p>
                                <div><a className="purchase waves-effect waves-light btn-large ">PURCHASE</a></div>
                                <div><a onClick={this.AddToBasket} className="add-basket waves-effect waves-light btn-large">ADD TO BASKET</a></div>
                                <div className="row">
                                    <div className="col s12 m12 l12">
                                        <div className="col left s6 m6 l6"><p>Developper</p></div>
                                        <div className="col right s6 m6 l6"><p>{this.state.game.attributes.developer}</p></div>
                                    </div>
                                    <div className="col s12 m12 l12">
                                        <div className="col left s6 m6 l6"><p>Editor</p></div>
                                        <div className="col right s6 m6 l6"><p>{this.state.game.attributes.editor}</p></div>
                                    </div>
                                    <div className="col s12 m12 l12">
                                        <div className="col left s6 m6 l6"><p>Release date</p></div>
                                        <div className="col right s6 m6 l6"><p>{this.state.game.attributes.publishDate}</p></div>
                                    </div>
                                    <div className="col s12 m12 l12">
                                        <div className="col left s6 m6 l6"><p>Platform</p></div>
                                        <div className="col right s6 m6 l6"><p>{this.state.game.attributes.platform}</p></div>
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