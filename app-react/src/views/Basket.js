import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Basket extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.state);
        this.state = {
            creators: props.state.creators,
            loaded: props.state.loaded
        }
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container-games">
                    <h2 className="flow-text center">Your Basket</h2>
                    <div className="gamepages-container row">
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Basket;