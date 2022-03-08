import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class ContainerPopular extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: false }
    }

    render(){
        return (
            <div className="col m12 l8">
                <div className="row popular-container">
                    <div className="col img s12 m12 l12">
                    </div>
                    <div className="col s12 m12 l12">
                    <h3 className="left">TITRE DU JEU</h3>
                    <p className="right">0$</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContainerPopular;