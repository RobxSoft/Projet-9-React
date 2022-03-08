import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const LINK = "http://localhost:1337"

class GameFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.game
        }
    }

    render(){
        return (
            <div className="games-container col">
                <img src={`${LINK+this.state.data.attributes.Icon.data.attributes.url}`}/>
                <div className="row valign-center">
                    <h3 className="left col s6 m6 l6">{this.state.data.attributes.Title}</h3>
                    <p className="right col s6 m6 l6">{this.state.data.attributes.Price}$</p>
                </div>
            </div>
        )
    }
}

export default GameFrame;