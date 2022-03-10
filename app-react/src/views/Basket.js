import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ApiUtilities from '../api/ApiUtilities.js';
import Loader from '../components/Loader';
import BasketItem from '../components/BasketItem';

class Basket extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.state);
        this.state = {
            loaded: false,
            basket: []
        }
    }

    componentDidMount(){
        var basketArray = JSON.parse(localStorage.getItem('basket')) || [];
        console.log(basketArray);
        this.setState({loaded: true, basket: basketArray});
    }

    render(){
        console.log(this.props);
        if (this.state.loaded == false){
            return (
                <>
                    <Navbar/>
                    <Loader/>
                    <Footer />
                </>
            )
        }
        return(
            <>
                <Navbar/>
                <div className="container-games">
                    <h2 className="flow-text center">Your Basket</h2>
                    <ul className="collection">
                        {this.state.basket && this.state.basket.map((game,i) => <BasketItem key={i} data={{
                            id: game.id,
                            amount: game.amount,
                            gameData: this.props.state.games.data.find(item=>item.id === game.id).attributes
                        }}/>)}
                    </ul>
                </div>
                <Footer />
            </>
        )
    }
}

export default Basket;