import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import App from '../App.js';

class ContainerArticles extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: false }
    }

    render(){
        return (
            <div className="sales col m12 l8">
                <div className="row sales-container">
                    <div className="col img s12 m12 l12">
                    </div>
                    <div className="col s12 m12 l12">
                    <p>-25%</p>
                    </div>
                </div>
                {props.articles.data.map((article,i) =>{return <h3 key={i}>{article.title}</h3>})}
                <p>0$</p>
            </div>
        )
    }
}

export default ContainerArticles;