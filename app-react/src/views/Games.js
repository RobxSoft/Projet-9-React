import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import GameFrame from '../components/GameFrame';
import Checkbox from '../components/Checkbox';

class Games extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            search: '',
            filters: {
                categories: [],
                prices: {
                    min: 0,
                    max : 1000,

                    previous_min: 0,
                    previous_max: 0,
                }
            },
            loaded: props.state.loaded
        }
    }

    handleChange = (text) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.search = text
        this.setState(stateCopy)
    }

    handleCategory = (name, state) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        if(state){
            stateCopy.filters.categories.push(name)
        }else{
            const index = stateCopy.filters.categories.indexOf(name);
            if (index > -1) {
                stateCopy.filters.categories.splice(index, 1);
            }
        }
        this.setState(stateCopy)
    }

    handlePriceChange(type, event){
        let stateCopy = JSON.parse(JSON.stringify(this.state));

        let newValue = parseInt(event.target.value != NaN &&  event.target.value || 0);
        if(newValue === NaN){
            newValue = this.state.filters.prices['previous_'+type];
        }
        stateCopy.filters.prices[type] = newValue
        stateCopy.filters.prices['previous_'+type] = newValue
        this.setState(stateCopy)
    }

    render(){
        const showGames = this.props.state.games.data.filter(
            (game,key)=>game.attributes.title.toLowerCase().includes(this.state.search.toLowerCase())
        )
        for (const [key, value] of Object.entries(showGames)) {
            //price checking
            console.log(this.state.filters.prices.min, this.state.filters.prices.max, value.attributes.price);
            if(value.attributes.price < this.state.filters.prices.min || value.attributes.price > this.state.filters.prices.max){
                delete showGames[key];
                continue;
            }

            //categories checking
            if(!value.attributes.categories || this.state.filters.categories.length > 0){continue};
            
            let hasCategory = true;
            for (const [_, checkedCategory] of Object.entries(this.state.filters.categories)) {
                let hasFound = false
                for (const [_, category] of Object.entries(value.attributes.categories.data)) {
                    if(category.attributes.name === checkedCategory){
                        hasFound = true
                    }
                }
                if(!hasFound){
                    hasCategory = false;
                    break;
                }
            }
            if(!hasCategory){
                delete showGames[key];
            }
        }
        return(
            <React.Fragment>
                <Navbar callback={this.handleChange}/>

                <form action="#">
                    {this.props.state.categories && this.props.state.categories.data.map((category,i) => <Checkbox key={i} callback={this.handleCategory} data={category}/>)}
                </form>

                <div className="row white">
                    <div className="input-field col s6">
                        <input value={this.state.filters.prices.min} placeholder="min" id="first_name" type="text" className="validate" onChange={(event) => this.handlePriceChange('min', event)}/>
                        <label className="active" htmlFor="first_name">Minimum Price</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={this.state.filters.prices.max} placeholder="max" id="last_name" type="text" className="validate" onChange={(event) => this.handlePriceChange('max', event)} />
                        <label className="active" htmlFor="last_name">Maximum Price</label>
                    </div>
                </div>

                <div className="container-games row">
                    <h2 className="flow-text">Games</h2>
                    <div className="gamepages-container">
                        {this.props.state.games && showGames.map((game,i) => <GameFrame key={i} game={game}/>)}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Games;