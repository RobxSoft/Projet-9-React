import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ER_Image from '../img/elden_ring.jpg';

class ContainerSales extends React.Component {

    render(){
        return (
            <div className="games-container">
                <div className="sales">
                    <img src={ER_Image} />
                    <p className="right">-25%</p>
                </div>
                <div className="row plus s12 m12 l12">
                    <h3 className="col s6 m6 l6 left">Elden Ring</h3>
                    <p className="col s6 m6 l6 right">0$</p>
                </div>
            </div>
        )
    }
}

export default ContainerSales;