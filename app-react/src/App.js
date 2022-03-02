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

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/accueil' element={<Page />}></Route>
=======
        <Route exact path='/' element={<Home />} />
>>>>>>> b6488486529fa77c0e1fa3ddc5012cf2ec881345
      </Routes>
    </Router>
  );
}

export default App;
