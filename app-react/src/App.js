import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './views/Home.js'
import Games from './views/Games.js'
import GameInfo from './views/GameInfo.js'
import ArticleInfo from './views/ArticleInfo.js'
import Articles from './views/Articles.js'
import AboutUs from './views/AboutUs.js'
import Loader from './components/Loader';
import Basket from './views/Basket.js'
import Order from './views/Order.js'

import 'materialize-css/dist/css/materialize.min.css';
import { Component } from 'react';
import ApiUtilities from './api/ApiUtilities.js';
import { Footer, Navbar } from 'react-materialize';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
       articles: [],
       games: [],
       creators: [],
       categories: [],
       loaded: false
    }
  }

  async componentDidMount () {
    const articles = await ApiUtilities.getArticle();
    const games = await ApiUtilities.getGames();
    const creators = await ApiUtilities.getCreator();
    const categories = await ApiUtilities.getCategories();
    const discover = await ApiUtilities.getDiscover();
    const discoverArticles = await ApiUtilities.getDiscoverArticles();

    this.setState({
      articles: articles,
      games: games,
      creators: creators,
      categories: categories,
      discover: discover,
      discoverArticles: discoverArticles,
      loaded: true
    })
  }

  render(){
    if (this.state.loaded == false){
      return (
        <>
            <Navbar/>
            <Loader/>
            <Footer/>
        </>
      )
    }
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home state={this.state}/>} />
          <Route exact path='/about-us' element={<AboutUs state={this.state}/>} />
          <Route exact path='/games' element={<Games state={this.state}/>} />
          <Route exact path='/articles' element={<Articles state={this.state}/>} />
          <Route exact path='/gameinfo/:id' element={<GameInfo state={this.state}/>} />
          <Route exact path='/articleinfo/:id' element={<ArticleInfo state={this.state}/>} />
          <Route exact path='/games' element={<Games state={this.state}/>} />
          <Route exact path='/games/:filter' element={<Games state={this.state}/>} />
          <Route exact path='/basket' element={<Basket state={this.state}/>} />
          <Route exact path='/order' element={<Order state={this.state}/>} />
        </Routes>
      </Router>
    )
  }
}

export default App;
