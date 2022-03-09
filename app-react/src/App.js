import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './views/Home.js'
import Games from './views/Games.js'
import Page from './views/TestPage'
import Loader from './components/Loader';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { Component } from 'react';
import ApiUtilities from './api/ApiUtilities.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
       articles:[],
       games: [],
       categories: [],
       loaded: false
    }
  }

  async componentDidMount () {
    console.log("mount");
    const articles = await ApiUtilities.getArticle();
    const games = await ApiUtilities.getGames();
    const categories = await ApiUtilities.getCategories();

    this.setState({
      articles: articles,
      games: games,
      categories: categories,
      loaded: true
    })
  }

  render(){
    if (this.state.loaded == false){
        return <Loader/>
    }
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home state={this.state}/>}  />
          <Route exact path='/games/:id' element={<Games state={this.state}/>} />
        </Routes>
      </Router>
    )
  }
}

export default App;
