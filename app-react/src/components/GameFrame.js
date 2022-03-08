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
            <div className="col m12 l8">
                <div className="row game-container">
                    <div className="col img s12 m12 l12" style={{background: `url(${LINK+this.state.data.attributes.Icon.data.attributes.url}) center`}}>
                    </div>
                    <div className="col s12 m12 l12">
                    <h3>{this.state.data.attributes.Title}</h3>
                    <p>{this.state.data.attributes.Price}$</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameFrame;