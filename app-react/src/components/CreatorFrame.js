import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const LINK = "http://localhost:1337"

class CreatorFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.creator
        }
    }

    render(){
        return (
            <div className="creator-container col s12 m12 l12">
                <div className="col s12 m5 l5">
                    <img src={`${LINK+this.state.data.attributes.icon.data.attributes.url}`}/>
                </div>
                <div className="col s12 m7 l7">
                    <h3>{this.state.data.attributes.name}</h3>
                    <p>{this.state.data.attributes.description}$</p>
                </div>
            </div>
        )
    }
}

export default CreatorFrame;