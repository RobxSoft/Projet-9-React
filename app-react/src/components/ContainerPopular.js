import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const LINK = "http://localhost:1337";

class ContainerPopular extends React.Component {
    render(){
        console.log(this.props.data);
        return (
            <div className="popular-container">
                <img src={LINK+this.props.data.attributes.icon.data.attributes.url}/>
                <div className="row">
                    <h3 className="left col s6 m6 l6">{this.props.data.attributes.title}</h3>
                    <p className="right col s6 m6 l6">{this.props.data.attributes.price}$</p>
                </div>
            </div>
        )
    }
}

export default ContainerPopular;