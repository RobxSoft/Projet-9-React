import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import App from '../App.js';

const LINK = "http://localhost:1337";

class BasketItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.data.id,
        }
        console.log(this.state);
        this.DeleteFromBasket = this.DeleteFromBasket.bind(this);
    }

    DeleteFromBasket(){
        console.log(this);
        if(this.props.data.callback){
            console.log("fire");
            this.props.data.callback(this.state.id);
        }
    }

    render(){
        return (
            <li className="collection-item avatar">
              <img src={LINK+this.props.data.gameData.icon.data.attributes.url} alt="" className="circle" />
              <span className="title">{this.props.data.gameData.title}</span>
              <p>{this.props.data.gameData.price}$</p>
              <p>{this.props.data.amount} in basket</p>
              <a onClick={this.DeleteFromBasket} className="secondary-content"><i className="material-icons">delete</i></a>
            </li>
        )
    }
}

export default BasketItem;