import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './views/Home.js'
import Page from './views/TestPage'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Component } from 'react';
import ApiUtilities from './api/ApiUtilities.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
       articles:[]
    }
  }

  async componentDidMount () {
    const articles = await ApiUtilities.getArticle();
    this.setState({
      articles: articles
    })
  }

  render(){
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
