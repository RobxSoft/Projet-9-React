import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const LINK = "http://localhost:1337"

class GameFrame extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="col m12 l8">
                <div className="row game-container">
                    <div className="col img s12 m12 l12" style={{background: `url(${LINK+this.props.game.attributes.icon.data.attributes.url}) center`}}>
                    </div>
                    <div className="col s12 m12 l12">
                    <h3>{this.props.game.attributes.title}</h3>
                    <p>{this.props.game.attributes.price}$</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameFrame;