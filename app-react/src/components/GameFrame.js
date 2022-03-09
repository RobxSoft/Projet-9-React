import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Link } from 'react-router-dom';

const LINK = "http://localhost:1337"

class GameFrame extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <Link className="link" to={`/gameinfo/${this.props.game.id}`}>
            <div className="games-container col">
                <img src={`${LINK+this.props.game.attributes.icon.data.attributes.url}`}/>
                <div className="row valign-center">
                    <h3 className="left col s6 m6 l6">{this.props.game.attributes.title}</h3>
                    <p className="right col s6 m6 l6">{this.props.game.attributes.price}$</p>
                </div>
            </div>
            </Link>
        )
    }
}

export default GameFrame;