import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class FeaturedGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: false }
    }

    render(){
        return (
            <div className="featured-game">
                <div className="icon"></div>
                <h3 className="truncate">Arthur</h3>
            </div>
        )
    }
}

export default FeaturedGame;