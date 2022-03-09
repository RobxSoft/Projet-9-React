import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const LINK = "http://localhost:1337"

class ArticleFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.article
        }
    }

    render(){
        return (
            <div className="article-container col s12 m6 l6">
                <img src={`${LINK+this.state.data.attributes.icon.data.attributes.url}`}/>
                <div>
                    <h3>{this.state.data.attributes.name}</h3>
                    <p>{this.state.data.attributes.description}$</p>
                </div>
            </div>
        )
    }
}

export default ArticleFrame;