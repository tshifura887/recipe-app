import {BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Pages from './Pages/Pages';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <NavBar/>
        <Pages/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
