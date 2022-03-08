import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import GameFrame from '../components/GameFrame';

class Games extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.state);
        this.state = {
            articles: props.state.articles,
            games: props.state.games,
            loaded: props.state.loaded
        }
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container-games">
                    <h2 className="flow-text">Games</h2>
                    <div className="gamepages-container row">
                        {this.state.games && this.state.games.data.map((game,i) => <GameFrame key={i} game={game}/>)}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Games;