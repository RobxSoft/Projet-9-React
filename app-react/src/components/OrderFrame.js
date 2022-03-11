import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import image from '../img/elden_ring.jpg';

const LINK = "http://localhost:1337"

class OrderFrame extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div class="order-container row z-depth-3">
                <div class="col s12 m4 l4 center">
                    <img className="responsive-img" src={image}/>
                </div>
                <div class="col s12 m8 l8">
                    <p>Order : Elden Ring</p>
                    <h5>TOTAL : 49.99$</h5>
                </div>
            </div>
        )
    }
}

export default OrderFrame;