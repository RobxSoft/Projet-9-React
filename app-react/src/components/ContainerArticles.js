import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import App from '../App.js';
import WS_Background from '../img/worldseed_thumbnail.jpeg';

class ContainerArticles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: props.article
        }
    }

    render(){
        return (
            <div className="article-container">
                <img src={WS_Background }/>
                <div>
                    <h3>World Seed Finally Released!</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis porta lacus, sit amet egestas dolor tristique vel. Integer dignissim eros lobortis ipsum semper faucibus.
                    </p>
                </div>
            </div>
        )
    }
}

export default ContainerArticles;