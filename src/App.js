import './App.css';
import {React, useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
//components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const [token, setToken] = useState('');

  //saving token to session storage
  useEffect(() => {
      setToken(!window.sessionStorage.getItem('token') ? '': window.sessionStorage.getItem('token'));
  }, []);

  //logging out
  const logout = () => {
    setToken('');
    window.sessionStorage.setItem('token', '');
  }

  return (
    <div className="App relative py-10 px-5 text-[#E8E8E8] min-h-screen">
      <Router>
        <Navbar />
        <AnimatedRoutes token={token} logout={logout}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
