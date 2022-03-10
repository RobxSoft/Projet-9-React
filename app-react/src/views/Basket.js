import React from 'react';
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
                <div className="row">
                    <div className="col container-games right-part2 s12 m12 l7">
                        <h2 className="flow-text center">Your Basket</h2>
                        <ul className="collection">
                            {this.state.basket && this.state.basket.map((game,i) => <BasketItem key={i} data={{
                                id: game.id,
                                amount: game.amount,
                                gameData: this.props.state.games.data.find(item=>item.id === game.id).attributes
                            }}/>)}
                        </ul>
                    </div>
                    <div className="col white-text left-part more center s12 m12 l3">
                        <div className="container">
                            <p>TOTAL : 00$</p>
                            <div><a className="purchase waves-effect waves-light btn-large ">PURCHASE</a></div>
                        </div>
                    </div>
                </div>                
                <Footer />
            </>
        )
    }
}

export default Basket;