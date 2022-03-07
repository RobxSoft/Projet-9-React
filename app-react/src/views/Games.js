import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Games extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>

                <Footer />
            </React.Fragment>
        )
    }
}

export default Games;