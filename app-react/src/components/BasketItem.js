import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import App from '../App.js';

const LINK = "http://localhost:1337";

class BasketItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.data.id,
            amount: this.props.data.amount
        }
        console.log(this.state);
        this.DeleteFromBasket = this.DeleteFromBasket.bind(this);
    }

    DeleteFromBasket(event){
        var existingEntries = JSON.parse(localStorage.getItem('basket')) || [];
        var item = existingEntries.find(item=>item.id === this.state.id);
        console.log(this.state.id);
        if (item){
            //incrementing amount
            item.amount -= 1;
            if(item.amount===0){
                const index = existingEntries.indexOf(item);
                if (index > -1) {
                    existingEntries.splice(index, 1);
                }
            }
            this.setState({amount: item.amount});
        }
        console.log(existingEntries);
        localStorage.setItem('basket', JSON.stringify(existingEntries));
        M.toast({html: 'Deleted item from basket!'});
    }

    render(){
        if(this.state.amount === 0) return(<div></div>);
        return (
            <li className="collection-item avatar">
              <img src={LINK+this.props.data.gameData.icon.data.attributes.url} alt="" className="circle" />
              <span className="title">{this.props.data.gameData.title}</span>
              <p>{this.props.data.gameData.price}$</p>
              <p>{this.state.amount} in basket</p>
              <a onClick={this.DeleteFromBasket} className="secondary-content"><i className="material-icons">delete</i></a>
            </li>
        )
    }
}

export default BasketItem;