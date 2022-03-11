import React, {Component} from 'react';

import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedGame from '../components/FeaturedGame';

import WS_Background from '../img/worldseed_thumbnail.jpeg';
import ContainerPopular from '../components/ContainerPopular';
import ContainerSales from '../components/ContainerSales';
import ContainerArticles from '../components/ContainerArticles';
import {Link} from 'react-router-dom';
import Loader from '../components/Loader';

const LINK = "http://localhost:1337";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            featured: null,
        }
    }
    
    componentDidMount(){
        console.log(this.props.state.discover.data[0].attributes.game.data);
        this.setState({
            loaded: true,
            featured: this.props.state.discover.data[0].attributes.game.data
        });
    }

    handleChange = (text) => {
        this.props.history.push('/games')
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
        
        const featureGameInfo = this.props.state.games.data.find(game=>game.id === this.state.featured.id);

        // Create items array
        const games = this.props.state.games.data;
        var PopularGames = Object.keys(this.props.state.games.data).map(function(key) {
            return [key, games[key]];
        });
        
        // Sort the array based on the second element
        PopularGames.sort(function(first, second) {
            return second[1].attributes.sales - first[1].attributes.sales;
        });
        
        // Create a new array with only the first 5 items
        PopularGames.slice(0, 5)

        //sales games
        var SalesGames = Object.keys(this.props.state.games.data).map(function(key) {
            console.log(games[key].attributes);
            if(games[key].attributes.promotion > 0){
                return [key, games[key]];
            }
        });
        //cleaning up
        for (const [key, value] of Object.entries(SalesGames)) {
            if (value === undefined){
                const index = SalesGames.indexOf(value);
                if (index > -1) {
                    SalesGames.splice(index, 1); 
                }
            }
        }
        
        console.log(SalesGames);

        return(
            <>
                <Navbar callback={this.handleChange}/>
                <div className="featured-shop row">
                    <div className="image-container col s12 l8">
                        <div className="shadow-img">
                            <img src={LINK+featureGameInfo.attributes.images.data[2].attributes.url} alt=""/>
                        </div>
                        <h2 className="flow-text">{this.state.featured.attributes.title}</h2>
                        <p>{this.state.featured.attributes.description}</p>
                        <Link className="btn z-depth-0 waves-effect waves-light btn-medium" to={`/gameinfo/${this.state.featured.id}`}>Buy</Link>
                    </div>

                    <div className="featured-list col s12 l4">
                        <div className="box">
                            {this.props.state.discover && this.props.state.discover.data.map((discover,i) => <FeaturedGame key={i} first={i===0} data={featureGameInfo}/>)}
                        </div>
                    </div>
                </div>
                <div className="container-articles">
                    <h2 className="flow-text">Popular Games</h2>
                    <Link className="waves-effect btn z-depth-0" to="/games">SEE ALL</Link>
                    <div className="send-game-container">
                        {PopularGames.map((data,i) => <ContainerPopular key={i} data={data[1]}/>)}
                    </div>
                </div>
                
                <div className="container-articles ">
                    <h2 className="flow-text">Sales</h2>
                    <Link className="waves-effect btn z-depth-0" to="/games">SEE ALL</Link>
                    <div className="send-game-container">
                        {SalesGames.map((data,i) => <ContainerSales key={i} data={data}/>)}
                    </div>
                </div>
                <div className="featured-title container center">
                        <h2 className="title">Featured Articles</h2>
                </div>
                <div className="featured-article row ">
                    <div className="image-container col s12 m12 l6">
                        <div className="simple-img">
                            <img src={WS_Background} alt=""/>
                        </div>
                    </div>
                    <div className="col s12 m12 l6">
                        <h3 className="flow-text">World Seed Finally Released!</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis porta lacus, sit amet egestas dolor tristique vel. Integer dignissim eros lobortis ipsum semper faucibus.
                        </p>
                        <a className="waves-effect waves-light btn-medium">READ MORE</a>
                    </div>
                </div>
                <div className="featured-article row ">
                    <div className="col s12 m12 l6">
                        <h3 className="flow-text">World Seed Finally Released!</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis porta lacus, sit amet egestas dolor tristique vel. Integer dignissim eros lobortis ipsum semper faucibus.
                        </p>
                        <a className="waves-effect waves-light btn-medium">READ MORE</a>
                    </div>
                    <div className="image-container col s12 m12 l6">
                        <div className="simple-img">
                            <img src={WS_Background} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container-articles">
                    <h2 className="flow-text">Popular Articles</h2>
                    <Link className="waves-effect btn z-depth-0" to="/articles">SEE ALL</Link>
                    <div className="send-game-container">
                        <ContainerArticles article={this.props.state.articles.data[0].attributes} />
                        <ContainerArticles article={this.props.state.articles.data[0].attributes} />
                        <ContainerArticles article={this.props.state.articles.data[0].attributes} />
                        <ContainerArticles article={this.props.state.articles.data[0].attributes} />
                    </div>
                </div>
                <div className="container-articles">
                    <h2 className="flow-text">Latest Articles</h2>
                    <Link className="waves-effect btn z-depth-0" to="/articles">SEE ALL</Link>
                    <div className="send-game-container">
                    <ContainerArticles article={this.props.state.articles.data[0].attributes} />
                    <ContainerArticles article={this.props.state.articles.data[0].attributes} />
                    <ContainerArticles article={this.props.state.articles.data[0].attributes} />
                    <ContainerArticles article={this.props.state.articles.data[0].attributes} />
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Home;