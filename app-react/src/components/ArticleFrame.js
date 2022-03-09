import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Link } from 'react-router-dom';

const LINK = "http://localhost:1337"

class ArticleFrame extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="article-container col s12 m6 l6">
                <img src={`${LINK+this.props.article.attributes.icon.data.attributes.url}`}/>
                <h3>{this.props.article.attributes.title}</h3>
                <p>{this.props.article.attributes.main_text}$</p>
                <Link className="link" to={`/articleinfo/${this.props.article.id}`}>more info</Link>
            </div>
        )
    }
}

export default ArticleFrame;