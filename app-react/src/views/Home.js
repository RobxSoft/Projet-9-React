import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedGame from '../components/FeaturedGame';

import WS_Background from '../img/worldseed_thumbnail.jpeg';
import ContainerPopular from '../components/ContainerPopular';
import ContainerSales from '../components/ContainerSales';
import ContainerArticles from '../components/ContainerArticles';
import Loader from '../components/Loader';
import FeaturedArticle from '../components/FeaturedArticle';

const LINK = "http://localhost:1337";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            featured: null,
            featuredSelected: 1
        }

        this.handleFeaturedClick = this.handleFeaturedClick.bind(this);
    }
    
    componentDidMount(){
        this.setState({
            loaded: true,
            featured: this.props.state.discover.data[0].attributes.game.data
        });
    }

    handleChange = (text) => {
        this.props.history.push('/games')
    }

    handleFeaturedClick(id){
        this.setState({
            featuredSelected: id,
            featured: this.props.state.discover.data[id-1].attributes.game.data
        });
        console.log(this.state);
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

        //handling popular games sorting
        const games = this.props.state.games.data;
        var PopularGames = Object.keys(this.props.state.games.data).map(function(key) {
            return [key, games[key]];
        });
        
        PopularGames.sort(function(first, second) {
            return second[1].attributes.sales - first[1].attributes.sales;
        });
        PopularGames.slice(0, 5)

        //sales games
        var SalesGames = Object.keys(this.props.state.games.data).map(function(key) {
            return [key, games[key]];
        });
        SalesGames.sort(function(first, second) {
            return second[1].attributes.sales - first[1].attributes.sales;
        });

        return(
            <>
                <Navbar callback={this.handleChange}/>
                <div className="featured-shop row">
                    <div className="image-container col s12 l8">
                        <div className="shadow-img">
                            <img src={LINK+featureGameInfo.attributes.images.data[2].attributes.url} alt=""/>
                        </div>
                        <h2 className="flow-text">{this.state.featured.attributes.title}</h2>
                        <p>{this.state.featured.attributes.main_description}</p>
                        <Link className="btn z-depth-0 waves-effect waves-light btn-medium" to={`/gameinfo/${this.state.featured.id}`}>Buy</Link>
                    </div>

                    <div className="featured-list col s12 l4">
                        <div className="box">
                            {this.props.state.discover && this.props.state.discover.data.map((discover,i) => <FeaturedGame key={i} callback={this.handleFeaturedClick} selected={discover.id===this.state.featuredSelected} data={this.props.state.games.data.find(game=>game.id === discover.id)}/>)}
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
                        {SalesGames.map((data,i) => <ContainerSales key={i} data={data[1]}/>)}
                    </div>
                </div>
                <div className="featured-title container center">
                        <h2 className="title">Featured Articles</h2>
                </div>

                {this.props.state.discoverArticles && this.props.state.discoverArticles.data.map((discover,i) => <FeaturedArticle key={i} id={discover.id} data={this.props.state.articles.data.find(article=>article.id === discover.attributes.article.data.id)}/>)}
                
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