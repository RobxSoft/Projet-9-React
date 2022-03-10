import React, {Component} from 'react';
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
        console.log(basketArray);
        this.setState({loaded: true, basket: basketArray});
    }

    async Order(){

        var data =  JSON.parse(localStorage.getItem('user'));
        var isLogged = data && data.Bearer;
        console.log(data);

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
        console.log(existingEntries);
        localStorage.setItem('basket', JSON.stringify(existingEntries));
        M.toast({html: 'Deleted item from basket!'});
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
                            gameData: this.props.state.games.data.find(item=>item.id === game.id).attributes,
                            callback: this.DeleteFromBasket
                        }}/>)}
                    </ul>
                </div>
                <a onClick={this.Order} className="waves-effect blue_btn">BUY</a>
                <Footer />
            </>
        )
    }
}

export default Basket;