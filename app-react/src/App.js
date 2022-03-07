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

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      games:[]
   }
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:1337/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
      }
    )
    
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
