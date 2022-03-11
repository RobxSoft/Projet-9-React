import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import M from 'materialize-css';
import Loader from '../components/Loader';
import BasketItem from '../components/BasketItem';

const LINK = "http://localhost:1337"

class Basket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            basket: []
        }

        this.Order = this.Order.bind(this);
        this.DeleteFromBasket = this.DeleteFromBasket.bind(this);
    }

    componentDidMount(){
        var basketArray = JSON.parse(localStorage.getItem('basket')) || [];
        this.setState({loaded: true, basket: basketArray});
    }

    async Order(){

        var data =  JSON.parse(localStorage.getItem('user'));
        var isLogged = data && data.Bearer;

        if(!isLogged){
            M.toast({html: 'Login!'});
            return;
        }

        var gamesID = [];
        for (const [key, value] of Object.entries(this.state.basket)) {
            gamesID.push(value.id)
        }
        if(gamesID.length === 0){
            M.toast({html: 'Basket is empty!'});
            return;
        }

        const orderDB = await fetch(`${LINK}/api/orders`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data.Bearer}`
            },
            body: JSON.stringify({
                data: {
                    user: [data.User.id],
                    games: gamesID
                }
            }),
        })
        const registerResponse = await orderDB.json();

        if(registerResponse){
            localStorage.removeItem('basket');
            this.setState({basket: []});
            M.toast({html: 'Ordered games!'});

            //incremeting each product sell amount.
            for (const [key, id] of Object.entries(gamesID)) {
                const orderDB = await fetch(`${LINK}/api/games/${id}`, {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${data.Bearer}`
                    },
                    body: JSON.stringify({
                        data: {
                            sales: 1,
                        }
                    }),
                })
                await orderDB.json();
            }
        }else{
            M.toast({html: 'Error while purshasing games.'});
        }
    }

    DeleteFromBasket(id){
        var existingEntries = this.state.basket;
        var item = existingEntries.find(item=>item.id === id);
        if (item){
            const index = existingEntries.indexOf(item);
            if (index > -1) {
                existingEntries.splice(index, 1);
            }
            this.setState({amount: item.amount});
        }
        localStorage.setItem('basket', JSON.stringify(existingEntries));
        M.toast({html: 'Deleted item from basket!'});
    }

    render(){
        if (this.state.loaded == false){
            return (
                <>
                    <Navbar/>
                    <Loader/>
                    <Footer />
                </>
            )
        }

        var totalPrice = 0
        for (const [key, value] of Object.entries(this.state.basket)) {
            totalPrice += this.props.state.games.data.find(game=>game.id===value.id).attributes.price;
        }

        return(
            <>
                <Navbar/>
                <div className="row">
                    <div className="col container-articles right-part2 s12 m12 l7">
                        <h2 className="flow-text center">Your Basket</h2>
                        <ul className="collection">
                            {this.state.basket && this.state.basket.map((game,i) => <BasketItem key={i} data={{
                                id: game.id,
                                amount: game.amount,
                                gameData: this.props.state.games.data.find(item=>item.id === game.id).attributes,
                                callback: this.DeleteFromBasket
                            }}/>)}
                        </ul>
                    </div>
                    <div className="col white-text left-part more center s12 m12 l3">
                        <div className="container">
                            <p>TOTAL : {totalPrice}$</p>
                            <div><a onClick={this.Order} className="purchase waves-effect waves-light btn-large ">PURCHASE</a></div>
                        </div>
                    </div>
                </div>                
                <Footer />
            </>
        )
    }
}

export default Basket;