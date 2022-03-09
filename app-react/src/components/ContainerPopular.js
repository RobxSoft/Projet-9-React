import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ER_Image from '../img/elden_ring.jpg';

class ContainerPopular extends React.Component {
    render(){
        return (
            <div className="popular-container">
                <img src={ER_Image}/>
                <div className="row">
                    <h3 className="left col s6 m6 l6">Elden Ring</h3>
                    <p className="right col s6 m6 l6">0$</p>
                </div>
            </div>
        )
    }
}

export default ContainerPopular;