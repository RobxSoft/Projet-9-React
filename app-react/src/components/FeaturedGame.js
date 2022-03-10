import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const LINK = "http://localhost:1337"

class FeaturedGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: false }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        if(this.props.first){
            this.setState({selected: true});
        }
    }

    handleClick(event){
        this.setState({selected: !this.state.selected})
    }

    render(){
        const color = this.state.selected === true && "grey darken-1" || "grey darken-3"
        return (
            <div onClick={this.handleClick} className={`featured-game ${color}`}>
                <div className="icon" style={{background:`url(${LINK+this.props.data.attributes.icon.data.attributes.url})`}}></div>
                <h3 className="truncate">{this.props.data.attributes.title}</h3>
            </div>
        )
    }
}

export default FeaturedGame;