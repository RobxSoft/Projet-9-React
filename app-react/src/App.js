import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Accueil from './views/Home.js'
import Page from './views/TestPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Accueil />}></Route>
        <Route exact path='/accueil' element={<Page />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
