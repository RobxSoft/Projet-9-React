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
        console.log(this.props.key);
        return (
            <div className="games-container col">
                <img src={`${LINK+this.state.data.attributes.Icon.data.attributes.url}`}/>
                <div className="row valign-center">
                    <Link to={'/gameinfo/'+[this.props.key]}>page</Link>
                    
                    <h3 className="left col s6 m6 l6">{this.state.data.attributes.Title}</h3>
                    <p className="right col s6 m6 l6">{this.state.data.attributes.Price}$</p>
                </div>
            </div>
        )
    }
}

export default GameFrame;