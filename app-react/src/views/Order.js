import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ApiUtilities from '../api/ApiUtilities.js';
import Loader from '../components/Loader';
import OrderFrame from '../components/OrderFrame';

class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
        }
    }

    componentDidMount(){
        this.setState({loaded: true});
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
        return(
            <>
                <Navbar/>
                <div className="container-games">
                    <h2 className="flow-text center">Your Orders</h2>
                    <ul className="collection">
                        <OrderFrame />
                        <OrderFrame />
                        <OrderFrame />
                        <OrderFrame />
                    </ul>
                </div>
                <Footer />
            </>
        )
    }
}

export default Order;